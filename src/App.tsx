// Create a new file named `App.js` and add the following code:

import React from "react";

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
            Welcome to my portfolio! I am a passionate developer with experience
            in building web applications.
          </p>
        </section>
        <section id="projects">
          <h2>Projects</h2>
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
