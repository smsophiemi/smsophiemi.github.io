/** @format */

import { alpha, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { JSX } from "react";

// todo move styles into scss files
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: "blur(24px)",
  border: "1px solid",
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: "8px 12px",
  minheight: "24px",
}));

/////////////////////////////// CONSTS /////////////////////////////////////////
// the height of the navbar section
const NAVHEIGHT = document.getElementById("nav-bar")?.clientHeight || 24;
const NAVBOTTOM =
  document.getElementById("nav-bar")?.getBoundingClientRect().bottom || 0;

/////////////////////////////// METHODS /////////////////////////////////////////
const scrollToSection = (sectionId: string): void => {
  console.log(`NAVHEIGHT: ${NAVHEIGHT}, NAVBOTTOM: ${NAVBOTTOM}`);
  console.log(document.getElementById("nav-bar")?.getBoundingClientRect());
  const section = document.getElementById(sectionId);
  if (section) {
    // section.scrollIntoView({ behavior: "smooth" });
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;

    console.log("section getBoundingClientRect");
    console.log(section.getBoundingClientRect());
    console.log(
      `sectionHeight: ${section.clientHeight}, window.scrollY: ${window.scrollY}`
    );
    console.log(
      `scrolling to section: ${sectionId}, top: ${sectionTop}, navHeight: ${NAVHEIGHT}`
    );
    window.scrollTo({
      top: sectionTop - 128,
      behavior: "smooth",
    });
  }
};

/////////////////////////////// COMPONENT /////////////////////////////////////////
const NavBar = (): JSX.Element => {
  return (
    <AppBar
      id="nav-bar"
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: "calc(var(--template-frame-height, 0px) + 28px)",
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="regular" disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              px: 0,
            }}
          >
            <Button
              variant="text"
              color="info"
              size="small"
              onClick={() => scrollToSection("about-me")}
            >
              About Me
            </Button>
            <Button
              variant="text"
              color="info"
              size="small"
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </Button>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
