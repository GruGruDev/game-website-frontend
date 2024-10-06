import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css"; // Nếu bạn có một file CSS cho trang chủ

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Awesome Game</h1>
        <p>Join the adventure and experience the best gameplay ever!</p>
      </header>

      <section className="home-content">
        <h2>Latest News & Events</h2>
        <p>
          Discover the latest updates and join exciting events in the world of
          Awesome Game.
        </p>

        <div className="buttons">
          <Link to="/register">
            <button className="btn-primary">Register</button>
          </Link>
          <Link to="/login">
            <button className="btn-secondary">Login</button>
          </Link>
        </div>

        <div className="features">
          <h3>Why Play Awesome Game?</h3>
          <ul>
            <li>🌟 Epic adventures in a vast fantasy world.</li>
            <li>🎮 Smooth gameplay with multiplayer support.</li>
            <li>🔥 Regular updates and exciting events.</li>
            <li>⚔️ Battle with friends or against enemies.</li>
            <li>🏆 Achieve greatness and unlock special rewards!</li>
          </ul>
        </div>
      </section>

      <footer className="home-footer">
        <p>&copy; 2024 Awesome Game. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
