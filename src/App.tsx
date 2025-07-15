/** @format */

// Create a new file named `App.js` and add the following code:

import React from "react";
import downloadFile from "./Common/Download";

const resumeURL = "./Resources/FlexProfile - SophieMi.pdf";
const resumeFileName = "FlexProfile - SophieMi.pdf";

function App() {
  return (
    <div>
      <header>
        <h1>My Portfolio</h1>
        <nav>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>
            Welcome to my online resume! I am a passionate developer with
            experience in building web applications.
          </p>
          <span>adding a image here soon... </span>
          <button onClick={() => downloadFile(resumeURL, resumeFileName)}>
            {" "}
            Download Resume
          </button>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <h3>test out material ui </h3>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          ∏
          <ul>
            <li>Project 1: Description of project 1</li>
            <li>Project 2: Description of project 2</li>
            <li>Project 3: Description of project 3</li>
          </ul>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>Email: example@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 My Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
