/** @format */

import { alpha, styled } from "@mui/material/styles";
import "@fontsource/roboto";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { JSX } from "react";
import './NavBar.scss';

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

/////////////////////////////// METHODS /////////////////////////////////////////

/////////////////////////////// COMPONENT /////////////////////////////////////////
const NavBar = (): JSX.Element => {
  return (
    <AppBar
      id="navbar"
      position="sticky"
      color="default"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: "white",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "right",
            alignItems: "center",
            flexWrap: { xs: "wrap", lg: "nowrap" },
          }}
        >
          <Button
            variant="text"
            color="info"
            size="small"
            href="#aboutme"
            className="nav-link d-inline mx-2"
          >
            About Me
          </Button>
          <Button
            variant="text"
            color="info"
            size="small"
            href="#projects"
            className="nav-link d-inline mx-2"
          >
            Projects
          </Button>
          <Button
            variant="text"
            color="info"
            size="small"
            href="#contact"
            className="nav-link d-inline mx-2"
          >
            Contact
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
