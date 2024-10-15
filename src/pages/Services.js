import React from "react";
import "../styles/Services.css"; // Tùy chỉnh CSS nếu cần

const Services = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Our Services</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="service-box">
            <h3>Game Development</h3>
            <p>
              We specialize in developing high-quality, immersive games that
              offer players an engaging experience like no other.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="service-box">
            <h3>Multiplayer Solutions</h3>
            <p>
              We provide robust multiplayer systems that allow players to
              connect and compete in real-time, no matter where they are.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="service-box">
            <h3>Support & Updates</h3>
            <p>
              Our team offers ongoing support and updates to ensure our games
              run smoothly and players have the best possible experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
