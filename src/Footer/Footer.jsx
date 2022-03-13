import React from "react";

import ExternalLink from "../ExternalLink";
import Section from "./Section";

function Footer() {
  return (
    <footer>
      <Section title="Developed by">
        <p>Felipe Gabriel Arend</p>
      </Section>

      <Section title="Social Media">
        <ExternalLink href="https://www.linkedin.com/in/felipegabrielarend/">LinkedIn</ExternalLink>
        <ExternalLink href="https://github.com/FrameForce/react-advice-slip">GitHub</ExternalLink>
      </Section>

      <Section title="Advices powered by">
        <ExternalLink href="https://api.adviceslip.com/">Advice Slip JSON API</ExternalLink>
      </Section>
    </footer>
  );
}

export default Footer;
