/** @format */

// Create a new file named `App.js` and add the following code:

import React from "react";
import NavBar from "./NavBar/NavBar";
import MainContent from "./MainContent";
import Container from "@mui/material/Container";
import AboutMe from "./About/AboutMe";
import ProjectsDashboard from "./Projects/ProjectsDashboard";

function App() {
  return (
    <div>
      <NavBar />
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: "flex", flexDirection: "column", my: 16, gap: 4 }}
      >
        <AboutMe />
        <ProjectsDashboard />
      </Container>
    </div>
  );
}

export default App;
