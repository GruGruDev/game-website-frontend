import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link từ React Router

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
      navigate("/login"); // Điều hướng về trang login sau khi đăng ký thành công
    } catch (err) {
      setError("Registration failed");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg">
            <div className="card-body">
              <h2 className="text-center mb-4">Register</h2>
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
                {error && <p className="text-danger mt-3">{error}</p>}
                <button
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                >
                  Register
                </button>
              </form>

              <div className="text-center mt-4">
                <p>
                  Already have an account? <Link to="/login">Login here</Link>
                </p>{" "}
                {/* Thêm liên kết đến trang Login */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
