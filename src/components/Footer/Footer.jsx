import React from "react";

import ExternalLink from "../ExternalLink";

function Footer() {
  return (
    <footer>
      <div className="footer-info">
        Developed by{" "}
        <ExternalLink href="https://www.linkedin.com/in/felipegabrielarend/">Felipe Gabriel Arend</ExternalLink>
      </div>

      <div className="footer-info">
        Source code at <ExternalLink href="https://github.com/FrameForce/react-advice-slip">GitHub</ExternalLink>
      </div>
    </footer>
  );
}

export default Footer;
