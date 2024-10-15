import React from "react";
import "../styles/About.css"; // Tùy chỉnh CSS nếu cần

const About = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">About Us</h1>
      <p className="lead text-center">
        Welcome to Awesome Game! We are a team of passionate gamers and
        developers dedicated to bringing you the best gaming experience. Our
        mission is to create immersive and engaging games that players love.
      </p>
      <div className="row mt-5">
        <div className="col-md-6">
          <h3>Our Story</h3>
          <p>
            It all started in 2020 when a group of friends decided to turn their
            love for games into something more. Since then, we’ve been growing
            our team and expanding our vision to make Awesome Game a place where
            players from around the world can come together to play and compete.
          </p>
        </div>
        <div className="col-md-6">
          <h3>Our Values</h3>
          <p>
            We believe in creativity, innovation, and community. Our team works
            hard every day to push the boundaries of what’s possible in gaming,
            all while keeping our players at the heart of everything we do.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
