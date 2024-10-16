import "animate.css"; // Import Animate.css cho hiệu ứng động
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css"; // File CSS tùy chỉnh

const Home = () => {
  return (
    <div className="home-page">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <Link to="/" className="navbar-brand logo-text">
            <img src="/logo.png" className="logo" alt="Logo" />
            Hyper Game
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section text-white text-center">
        <div className="container">
          <h1 className="animate__animated animate__fadeInDown">
            The Ultimate Adventure Awaits!
          </h1>
          <p className="lead animate__animated animate__fadeInUp">
            Step into the world of excitement and unlock endless possibilities.
          </p>
          <Link
            to="/register"
            className="btn btn-glow animate__animated animate__pulse"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="btn btn-outline-light animate__animated animate__fadeIn"
          >
            Login
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section container text-center my-5">
        <h2 className="text-uppercase section-title animate__animated animate__bounceIn">
          Why You'll Love SuperGame
        </h2>
        <div className="row">
          <div className="col-md-4">
            <div className="feature-card animate__animated animate__fadeInUp">
              <i className="fas fa-gamepad fa-4x feature-icon"></i>
              <h5>Epic Gameplay</h5>
              <p>Experience immersive adventures with stunning graphics.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-card animate__animated animate__fadeInUp">
              <i className="fas fa-users fa-4x feature-icon"></i>
              <h5>Multiplayer Mode</h5>
              <p>Team up with friends or challenge players around the world.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-card animate__animated animate__fadeInUp">
              <i className="fas fa-trophy fa-4x feature-icon"></i>
              <h5>Exclusive Rewards</h5>
              <p>Unlock badges, trophies, and rare items as you conquer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section text-center text-white">
        <div className="container">
          <h2 className="animate__animated animate__fadeInLeft">
            Join Millions of Players Worldwide
          </h2>
          <p className="animate__animated animate__fadeInRight">
            Get ready to embark on your journey today.
          </p>
          <Link to="/register" className="btn btn-glow">
            Join Now
          </Link>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="news-section container my-5">
        <h2 className="text-uppercase text-center section-title">
          Latest Updates
        </h2>
        <div className="row">
          <div className="col-md-4">
            <div className="news-card">
              <img
                src="https://images.ctfassets.net/j95d1p8hsuun/2jfzG21kQR797l5HTqy2ur/fbae937be8b61af35341ec7a3792cd08/NW_ROTAE_KEY_WEB_740x416.jpg"
                alt="News 1"
                className="news-img"
              />
              <h5>New Expansion Released</h5>
              <p>Explore the unknown and conquer new lands.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="news-card">
              <img
                src="https://preview.redd.it/when-are-we-gonna-see-a-double-xp-weekend-v0-lkvqr3y8723a1.jpg?auto=webp&s=3b975b6ed4d6cc8076be426a04544110b38f3df1"
                alt="News 2"
                className="news-img"
              />
              <h5>Double XP Weekend</h5>
              <p>Earn double experience points this weekend!</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="news-card">
              <img
                src="https://cdn.wedevs.com/uploads/2021/04/holiday-limited-time-offer.png"
                alt="News 3"
                className="news-img"
              />
              <h5>Holiday Event</h5>
              <p>Enjoy exclusive discounts and limited-time rewards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer text-center text-white">
        <div className="container">
          <p>&copy; 2024 SuperGame. All rights reserved.</p>
          <p>
            Follow us on
            <a href="#" className="text-light">
              {" "}
              Facebook
            </a>
            ,
            <a href="#" className="text-light">
              {" "}
              Twitter
            </a>
            , and
            <a href="#" className="text-light">
              {" "}
              Instagram
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
