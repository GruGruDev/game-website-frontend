import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/LoginRegister.css"; // Tùy chỉnh CSS nếu cần

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false); // State cho Remember Me
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Dùng để điều hướng

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      const token = response.data.token;

      if (rememberMe) {
        // Nếu chọn "Remember Me", lưu token vào localStorage
        localStorage.setItem("token", token);
      } else {
        // Nếu không chọn "Remember Me", lưu token vào sessionStorage
        sessionStorage.setItem("token", token);
      }

      // Xóa thông báo lỗi nếu đăng nhập thành công
      setError("");

      // Điều hướng tới trang tài khoản sau khi đăng nhập thành công
      navigate("/account");
    } catch (error) {
      // Xử lý lỗi và hiển thị thông báo lỗi cho người dùng
      console.error("Error during login:", error);
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

        {/* Checkbox Remember Me */}
        <div className="form-group form-check mt-3">
          <input
            type="checkbox"
            className="form-check-input"
            id="rememberMe"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="rememberMe">
            Remember Me
          </label>
        </div>

        {/* Link to Forgot Password */}
        <div className="form-group mt-3">
          <Link
            to="/forgot-password"
            className="forgot-password-link"
            style={{ color: "red", fontWeight: "bold", textDecoration: "none" }}
          >
            Forgot Password?
          </Link>
        </div>

        <button type="submit" className="btn btn-primary btn-block mt-4">
          Login
        </button>

        {/* Hiển thị thông báo lỗi nếu có */}
        {error && <p className="text-danger mt-3">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
