/** @format */

import { motion } from "framer-motion";
import { Laugh } from "lucide-react";
import { JSX, useEffect } from "react";
import React from "react";
import "./AboutMe.scss";

/////////////////////////////// CONSTS /////////////////////////////////////////
const profile_pic = "/Resources/profile_pic.jpg";
const branding_stmt = "/Resources/branding_stmt.txt";

/////////////////////////////// METHODS /////////////////////////////////////////

/////////////////////////////// COMPONENT /////////////////////////////////////////
const AboutMe = (): JSX.Element => {
  const [branding_text, setBrandingText] = React.useState("");

  useEffect(() => {
    fetch(branding_stmt)
      .then((res) => res.text())
      .then((text) => setBrandingText(text));
  }, [branding_stmt]);

  return (
    <section id="aboutme" className="container text-center py-5">
      <motion.img
        id="profile-pic"
        src={profile_pic}
        alt="Profile"
        className="rounded-circle mb-4 shadow"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div className="d-flex justify-content-center align-items-center gap-2">
        <Laugh />
        <h1 className="fw-bold">Hi, I'm Sophie</h1>
        <Laugh />
      </div>
      <p className="lead text-secondary">
        Software Engineer | Santa Clara, CA, 95054
      </p>
      <p className="branding-text mx-auto">{branding_text}</p>
    </section>
  );
};

export default AboutMe;
