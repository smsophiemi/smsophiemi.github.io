import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Portfolio() {
  return (
    <div className="position-relative bg-light text-dark min-vh-100">
      {/* Animated Background */}
      <motion.div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          zIndex: -1,
          background:
            "radial-gradient(circle at 20% 30%, rgba(173, 216, 230, 0.5), transparent 60%)," +
            "radial-gradient(circle at 80% 40%, rgba(144, 238, 144, 0.5), transparent 60%)," +
            "radial-gradient(circle at 50% 80%, rgba(255, 255, 153, 0.5), transparent 60%)",
        }}
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold text-primary" href="#home">
            My Portfolio
          </a>
          <div>
            <a href="#about" className="nav-link d-inline mx-2">About</a>
            <a href="#work" className="nav-link d-inline mx-2">Work</a>
            <a href="#contact" className="nav-link d-inline mx-2">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="container text-center py-5">
        <motion.img
          src="https://placehold.co/200x200"
          alt="Profile"
          className="rounded-circle mb-4 shadow"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <h1 className="fw-bold">Hi, I'm Your Name</h1>
        <p className="lead text-secondary">Full-Stack Developer | Designer | Problem Solver</p>
      </section>

      {/* Work Section */}
      <section id="work" className="container py-5">
        <h2 className="fw-bold text-center mb-4">Featured Work</h2>
        <div className="row g-4">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="col-md-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="card border-info shadow-sm h-100">
                <img
                  src={`https://placehold.co/400x250?text=Project+${i}`}
                  className="card-img-top"
                  alt={`Project ${i}`}
                />
                <div className="card-body">
                  <h5 className="card-title text-info">Project {i}</h5>
                  <p className="card-text text-muted">A short description of this project.</p>
                  <a href="#" className="btn btn-success">View</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container text-center py-5">
        <h2 className="fw-bold mb-4">Get in Touch</h2>
        <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap">
          <a href="mailto:example@email.com" className="btn btn-info text-white">
            <Mail className="me-2" size={18} /> Email
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="btn btn-dark">
            <Github className="me-2" size={18} /> GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="btn btn-primary">
            <Linkedin className="me-2" size={18} /> LinkedIn
          </a>
          <a href="/resume.pdf" className="btn btn-warning text-dark">
            <FileText className="me-2" size={18} /> Resume
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 bg-white border-top">
        <p className="mb-0">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}
