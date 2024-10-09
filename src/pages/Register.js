import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        email,
        username,
        password,
      });
      alert("Registration successful! Please login.");
      navigate("/login"); // Điều hướng tới trang login sau khi đăng ký thành công
    } catch (err) {
      setError("Registration failed. Please try again.");
    }
  };

  // Đăng ký qua Google
  const googleRegister = () => {
    window.open("http://localhost:5000/auth/google", "_self"); // Mở trang đăng ký qua Google
  };

  // Đăng ký qua Facebook
  const facebookRegister = () => {
    window.open("http://localhost:5000/auth/facebook", "_self"); // Mở trang đăng ký qua Facebook
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Register</h2>
      {/* Form đăng ký bằng email và mật khẩu */}
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block mt-4">
          Register
        </button>
        {error && <p className="text-danger mt-3">{error}</p>}
      </form>

      {/* Thêm các nút đăng ký qua Google và Facebook */}
      <div className="social-register text-center mt-4">
        <p>Or register with</p>
        <button
          onClick={googleRegister}
          className="btn btn-danger btn-block mb-2"
        >
          Continue with Google
        </button>
        <button
          onClick={facebookRegister}
          className="btn btn-primary btn-block"
        >
          Continue with Facebook
        </button>
      </div>
    </div>
  );
};

export default Register;
