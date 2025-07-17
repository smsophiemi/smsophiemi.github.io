/** @format */

import downloadFile from "../Common/Download";
import { JSX } from "react";

/////////////////////////////// CONSTS /////////////////////////////////////////
const resumeURL = "./Resources/FlexProfile - SophieMi.pdf";
const resumeFileName = "FlexProfile - SophieMi.pdf";

/////////////////////////////// METHODS /////////////////////////////////////////

/////////////////////////////// COMPONENT /////////////////////////////////////////
const AboutMe = (): JSX.Element => {
  return (
    <div>
      <section id="about-me">
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
    </div>
  );
};

export default AboutMe;
