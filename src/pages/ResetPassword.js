import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const { token } = useParams(); // Lấy token từ URL
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Không cần sử dụng res nếu không cần phản hồi của server
      await axios.post(
        `http://localhost:5000/api/auth/reset-password/${token}`,
        { newPassword }
      );
      setMessage("Password reset successfully.");
      setTimeout(() => {
        navigate("/login"); // Chuyển hướng về trang đăng nhập sau khi đặt lại mật khẩu thành công
      }, 2000); // Thêm delay để hiển thị thông báo thành công trước khi chuyển trang
    } catch (error) {
      setMessage("Error resetting password.");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>New Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          Reset Password
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ResetPassword;
