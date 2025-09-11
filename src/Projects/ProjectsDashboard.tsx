/** @format */

import { motion } from "framer-motion";
import { JSX } from "react";

/////////////////////////////// CONSTS /////////////////////////////////////////
const projects = [];
// const projects = [1, 2, 3];

/////////////////////////////// METHODS /////////////////////////////////////////

/////////////////////////////// COMPONENT /////////////////////////////////////////
const ProjectsDashboard = (): JSX.Element => {
  return (
    <section id="projects" className="container py-5">
      <h2 className="fw-bold text-center mb-4">Featured Work</h2>
      {projects.length === 0 && (
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card border-info shadow-sm h-100">
              <img
                src={`https://placehold.co/400x250?text={...}`}
                className="card-img-top"
                alt={`Project Coming Soon`}
              />
              <div className="card-body">
                <h5 className="card-title text-info">Project Coming Soon</h5>
                <p className="card-text text-muted">
                  More projects will be added soon. Stay tuned!
                </p>
                <button className="btn btn-success" disabled>
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {projects.length != 0 && (
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
                  <p className="card-text text-muted">
                    A short description of this project.
                  </p>
                  <a href="#" className="btn btn-success">
                    View
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ProjectsDashboard;
