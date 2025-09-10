/** @format */

import { Mail, Github, Linkedin, FileText } from "lucide-react";
import { JSX } from "react";
import downloadFile from "../Common/Download";

/////////////////////////////// CONSTS /////////////////////////////////////////
const resumeURL = "./Resources/FlexProfile - SophieMi.pdf";
const resumeFileName = "FlexProfile - SophieMi.pdf";

const ContactMe = (): JSX.Element => {
  return (
    <section id="contact" className="container text-center py-5">
      <h2 className="fw-bold mb-4">Get in Touch</h2>
      <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap">
        <a href="mailto:example@email.com" className="btn btn-info text-white">
          <Mail className="me-2" size={18} /> Email
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="btn btn-dark"
        >
          <Github className="me-2" size={18} /> GitHub
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          <Linkedin className="me-2" size={18} /> LinkedIn
        </a>
        <a href="/resume.pdf" className="btn btn-warning text-dark">
          <FileText
            className="me-2"
            size={18}
            onClick={() => downloadFile(resumeURL, resumeFileName)}
          />
          Resume
        </a>
      </div>
    </section>
  );
};

export default ContactMe;
