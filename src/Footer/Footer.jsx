import React from "react";

import ExternalLink from "../ExternalLink";
import Section from "./Section";

function Footer() {
  return (
    <footer>
      <Section title="Developed by">
        <ExternalLink href="https://www.linkedin.com/in/felipegabrielarend/">Felipe Gabriel Arend</ExternalLink>
      </Section>

      <Section title="Source code at">
        <ExternalLink href="https://github.com/FrameForce/react-advice-slip">GitHub</ExternalLink>
      </Section>
    </footer>
  );
}

export default Footer;
