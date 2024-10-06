import axios from "axios";
import React, { useEffect, useState } from "react";

const Account = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        return; // Nếu không có token, người dùng không được phép truy cập
      }

      try {
        const res = await axios.get("http://localhost:5000/api/auth/account", {
          headers: {
            Authorization: `Bearer ${token}`, // Gửi token trong header
          },
        });
        setUser(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Account Information</h2>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
    </div>
  );
};

export default Account;
