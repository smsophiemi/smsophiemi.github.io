/** @format */

import { Mail, Github, Linkedin, FileText } from "lucide-react";
import { JSX } from "react";
import downloadFile from "../Common/Download";

/////////////////////////////// CONSTS /////////////////////////////////////////
const resumeURL = "./Resources/resume-9:9.pdf";
// custom filename for download
const resumeFileName = "SophieMi-Resume.pdf";

const ContactMe = (): JSX.Element => {
  return (
    <section id="contact" className="container text-center py-5">
      <h2 className="fw-bold mb-4">Get in Touch</h2>
      <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap">
        <a
          href="mailto:smsophiemi@gmail.com"
          className="btn btn-info text-white"
        >
          <Mail className="me-2" size={18} /> Email
        </a>
        <a
          href="https://github.com/smsophiemi"
          target="_blank"
          rel="noreferrer"
          className="btn btn-dark"
        >
          <Github className="me-2" size={18} /> GitHub
        </a>
        <a
          href="https://linkedin.com/in/sophie-mi"
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          <Linkedin className="me-2" size={18} /> LinkedIn
        </a>
        <a
        //   href="/Resources/resume-9:9.pdf"
          className="btn btn-warning text-dark"
          onClick={() => downloadFile(resumeURL, resumeFileName)}
        >
          <FileText
            className="me-2"
            size={18}
            
          />
          Resume
        </a>
      </div>
    </section>
  );
};

export default ContactMe;
