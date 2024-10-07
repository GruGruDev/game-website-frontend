import axios from "axios";
import React, { useEffect, useState } from "react";

const Account = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const res = await axios.get("http://localhost:5000/api/auth/account", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data); // Hiển thị thông tin người dùng
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    };

    fetchUserData();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Account Information</h2>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Username:</strong> {user.username}
      </p>
    </div>
  );
};

export default Account;
