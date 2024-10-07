import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link từ React Router
import "../styles/LoginRegister.css"; // Import CSS tùy chỉnh

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token); // Lưu JWT token vào localStorage
      navigate("/account"); // Điều hướng tới trang quản lý tài khoản
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg">
            <div className="card-body">
              <h2 className="text-center mb-4">Login</h2>
              <form onSubmit={handleLogin}>
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
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {error && <p className="text-danger mt-3">{error}</p>}
                <button
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                >
                  Login
                </button>
              </form>

              <div className="text-center mt-4">
                <p>
                  Don't have an account?{" "}
                  <Link to="/register">Register here</Link>
                </p>{" "}
                {/* Thêm liên kết đến trang Register */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
