import React, { useState } from "react";
import "../styles/Contact.css"; // Tùy chỉnh CSS nếu cần

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
    // Xử lý logic gửi mail ở đây
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mt-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mt-3">
          <label>Message</label>
          <textarea
            className="form-control"
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
