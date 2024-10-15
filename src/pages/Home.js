// import "animate.css";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-page">
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src="/logo.png" alt="Logo" className="logo" />
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

      {/* Header Section */}
      <header className="bg-primary text-white text-center py-5 mb-4 animate__animated animate__fadeIn">
        <div className="container">
          <h1 className="display-4 animate__animated animate__fadeInDown">
            Welcome to Awesome Game
          </h1>
          <p className="lead animate__animated animate__fadeInUp">
            Join the ultimate adventure in a world full of excitement!
          </p>
          <Link
            to="/register"
            className="btn btn-light btn-lg mx-2 animate__animated animate__zoomIn"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="btn btn-outline-light btn-lg mx-2 animate__animated animate__zoomIn"
          >
            Login
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="container my-5 animate__animated animate__fadeInUp">
        <h2 className="text-center mb-4">Why Choose Awesome Game?</h2>
        <div className="row text-center">
          <div className="col-md-4">
            <div className="card border-0">
              <div className="card-body">
                <i className="fas fa-gamepad fa-3x text-primary mb-3 animate__animated animate__bounceIn"></i>
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
                <i className="fas fa-users fa-3x text-primary mb-3 animate__animated animate__bounceIn"></i>
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
                <i className="fas fa-trophy fa-3x text-primary mb-3 animate__animated animate__bounceIn"></i>
                <h5 className="card-title">Earn Rewards</h5>
                <p className="card-text">
                  Complete quests and unlock exclusive rewards and achievements!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Our Story</h2>
          <p className="text-center">
            Awesome Game was founded by a passionate team of gamers and
            developers who aimed to create the most immersive and exciting
            gaming experience. From humble beginnings to global success, our
            journey is a testament to the power of creativity and dedication.
          </p>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="container my-5">
        <h2 className="text-center mb-4">Meet Our Team</h2>
        <div className="row text-center">
          <div className="col-md-4">
            <div className="card border-0">
              <img
                src="team1.jpg"
                alt="Team Member"
                className="img-fluid rounded-circle mb-3"
              />
              <h5 className="card-title">GruGru</h5>
              <p className="card-text">Founder & CEO</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0">
              <img
                src="team2.jpg"
                alt="Team Member"
                className="img-fluid rounded-circle mb-3"
              />
              <h5 className="card-title">GruGru</h5>
              <p className="card-text">Lead Developer</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0">
              <img
                src="team3.jpg"
                alt="Team Member"
                className="img-fluid rounded-circle mb-3"
              />
              <h5 className="card-title">GruGru</h5>
              <p className="card-text">Game Designer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-light py-5">
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
