/** @format */
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar/NavBar";
import AboutMe from "./About/AboutMe";
import ProjectsDashboard from "./Projects/ProjectsDashboard";
import ContactMe from "./Contact/ContactMe";

function App() {
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

      <NavBar />
      <AboutMe />
      <ContactMe />
      <ProjectsDashboard />

      {/* Footer */}
      <footer className="text-center py-4 bg-white border-top">
        <p className="mb-0">
          © {new Date().getFullYear()} Created by Sophie Mi. Made with React.
        </p>
      </footer>
    </div>
  );
}

export default App;
