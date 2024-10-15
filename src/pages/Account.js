import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/Account.css"; // Tùy chỉnh CSS cho trang Account

const Account = () => {
  const [user, setUser] = useState({ email: "", username: "", avatar: "" });
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState(null); // State để lưu ảnh avatar
  const [message, setMessage] = useState("");

  // Lấy thông tin tài khoản hiện tại khi trang được tải
  useEffect(() => {
    const token =
      sessionStorage.getItem("token") || localStorage.getItem("token");
    axios
      .get("http://localhost:5000/api/auth/account", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUser(res.data);
        setEmail(res.data.email);
        setUsername(res.data.username);
      })
      .catch((err) => {
        setMessage("Error loading user data");
      });
  }, []);

  // Xử lý cập nhật thông tin tài khoản
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        "http://localhost:5000/api/auth/account",
        { email, username },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      setMessage("User information updated successfully.");
    } catch (err) {
      setMessage("Error updating information.");
    }
  };

  // Xử lý tải lên avatar
  const handleAvatarUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("avatar", avatar);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/account/avatar",
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // Cập nhật avatar trong state mà không reload trang
      setUser({ ...user, avatar: res.data.avatar });
      setMessage("Avatar uploaded successfully!");
    } catch (err) {
      setMessage("Error uploading avatar.");
    }
  };

  // Xử lý xóa tài khoản
  const handleDeleteAccount = async () => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      try {
        await axios.delete("http://localhost:5000/api/auth/account", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        alert("Account deleted successfully.");
        localStorage.removeItem("token");
        window.location.href = "/";
      } catch (err) {
        alert("Error deleting account.");
      }
    }
  };

  // Xử lý xóa avatar
  const handleDeleteAvatar = async () => {
    if (window.confirm("Are you sure you want to delete your avatar?")) {
      try {
        await axios.delete("http://localhost:5000/api/auth/account/avatar", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        // Cập nhật state để avatar biến mất mà không reload trang
        setUser({ ...user, avatar: "" });
        setMessage("Avatar deleted successfully!");
      } catch (err) {
        setMessage("Error deleting avatar.");
      }
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Manage Account</h2>

      {/* Form cập nhật thông tin */}
      <form onSubmit={handleUpdate}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          Update
        </button>
        {message && <p className="text-success mt-3">{message}</p>}
      </form>

      {/* Avatar Upload và Quản lý Avatar */}
      <h3 className="text-center mt-5">Upload & Manage Avatar</h3>
      {user.avatar ? (
        <div className="text-center mt-3">
          <img
            src={`http://localhost:5000${user.avatar}`}
            alt="Avatar"
            className="img-thumbnail"
            width="150"
          />
          <button
            onClick={handleDeleteAvatar}
            className="btn btn-danger btn-block mt-3"
          >
            Delete Avatar
          </button>
        </div>
      ) : (
        <p className="text-center">No avatar available</p>
      )}
      <form onSubmit={handleAvatarUpload}>
        <div className="form-group mt-3">
          <label>Choose New Avatar</label>
          <input
            type="file"
            className="form-control"
            onChange={(e) => setAvatar(e.target.files[0])}
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block mt-4">
          Upload Avatar
        </button>
      </form>

      {/* Nút xóa tài khoản */}
      <button onClick={handleDeleteAccount} className="btn btn-danger mt-5">
        Delete Account
      </button>
    </div>
  );
};

export default Account;
