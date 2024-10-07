import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css"; // Nếu bạn cần tùy chỉnh CSS riêng

const Home = () => {
  return (
    <div className="home-page">
      {/* Header Section */}
      <header className="bg-primary text-white text-center py-5 mb-4">
        <div className="container">
          <h1 className="display-4">Welcome to Awesome Game</h1>
          <p className="lead">
            Join the ultimate adventure in a world full of excitement!
          </p>
          <Link to="/register" className="btn btn-light btn-lg mx-2">
            Get Started
          </Link>
          <Link to="/login" className="btn btn-outline-light btn-lg mx-2">
            Login
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="container my-5">
        <h2 className="text-center mb-4">Why Choose Awesome Game?</h2>
        <div className="row text-center">
          <div className="col-md-4">
            <div className="card border-0">
              <div className="card-body">
                <i className="fas fa-gamepad fa-3x text-primary mb-3"></i>
                <h5 className="card-title">Exciting Gameplay</h5>
                <p className="card-text">
                  Experience immersive and interactive gameplay like never
                  before!
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0">
              <div className="card-body">
                <i className="fas fa-users fa-3x text-primary mb-3"></i>
                <h5 className="card-title">Multiplayer Mode</h5>
                <p className="card-text">
                  Play with friends or compete with players worldwide in
                  multiplayer battles.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0">
              <div className="card-body">
                <i className="fas fa-trophy fa-3x text-primary mb-3"></i>
                <h5 className="card-title">Earn Rewards</h5>
                <p className="card-text">
                  Complete quests and unlock exclusive rewards and achievements!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Latest News & Events</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card h-100">
                <img
                  src="https://via.placeholder.com/300x200"
                  className="card-img-top"
                  alt="Event 1"
                />
                <div className="card-body">
                  <h5 className="card-title">New Expansion Released!</h5>
                  <p className="card-text">
                    Explore the new lands and unlock exciting new content in our
                    latest expansion!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <img
                  src="https://via.placeholder.com/300x200"
                  className="card-img-top"
                  alt="Event 2"
                />
                <div className="card-body">
                  <h5 className="card-title">Weekend Double XP Event</h5>
                  <p className="card-text">
                    Join us for a weekend full of double XP, and level up faster
                    than ever before!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <img
                  src="https://via.placeholder.com/300x200"
                  className="card-img-top"
                  alt="Event 3"
                />
                <div className="card-body">
                  <h5 className="card-title">Special Holiday Sale</h5>
                  <p className="card-text">
                    Don’t miss out on our holiday sale, offering discounts on
                    exclusive items and upgrades!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">What Players Are Saying</h2>
          <div
            id="testimonialCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="carousel-caption">
                  <p>
                    "This game has changed the way I see online gaming. It's
                    thrilling!"
                  </p>
                  <small>- Player One</small>
                </div>
              </div>
              <div className="carousel-item">
                <div className="carousel-caption">
                  <p>
                    "The best multiplayer experience I’ve had! Highly recommend
                    to all!"
                  </p>
                  <small>- Player Two</small>
                </div>
              </div>
              <div className="carousel-item">
                <div className="carousel-caption">
                  <p>
                    "I love the challenges and the constant updates. Always
                    something new!"
                  </p>
                  <small>- Player Three</small>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#testimonialCarousel"
              role="button"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#testimonialCarousel"
              role="button"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>&copy; 2024 Awesome Game. All rights reserved.</p>
          <p>
            Follow us on{" "}
            <a href="#" className="text-light">
              Facebook
            </a>
            ,{" "}
            <a href="#" className="text-light">
              Twitter
            </a>
            , and{" "}
            <a href="#" className="text-light">
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
