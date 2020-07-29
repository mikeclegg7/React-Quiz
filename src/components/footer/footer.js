import React from "react";

//Return a little footer
const Footer = (props) => (
  <footer className="Footer">
    <div className="FooterBlock">
      <div className="FooterText">
        <p>
          Created in React by Mike Clegg
          <br />
          <a
            href="https://github.com/mikeclegg7/Online-Portfolio"
            target="blank"
          >
            GitHub
          </a>{" "}
          -{" "}
          <a
            href="https://www.linkedin.com/in/mike-clegg-6292aa37/"
            target="blank"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
