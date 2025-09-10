/** @format */
import NavBar from "./NavBar/NavBar";
import MainContent from "./MainContent";
import Container from "@mui/material/Container";
import AboutMe from "./About/AboutMe";
import ProjectsDashboard from "./Projects/ProjectsDashboard";
import Portfolio from "./Portfolio";

function App() {
  return (
    <div>
      <Portfolio />
      {/* <NavBar />
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: "flex", flexDirection: "column", my: 16, gap: 4 }}
      >
        <AboutMe />
        <ProjectsDashboard />
      </Container> */}
    </div>
  );
}

export default App;
