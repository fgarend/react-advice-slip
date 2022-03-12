import React from "react";

import Section from "./Section";

function Footer() {
  return (
    <footer>
      <Section title="Developed by">
        <p>Felipe Gabriel Arend</p>
      </Section>
      <Section title="Social Media">
        <p>
          <a href="https://www.linkedin.com/in/felipegabrielarend/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </p>
        <p>
          <a href="https://github.com/FrameForce/react-advice-slip" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </p>
      </Section>
      <Section title="Advices powered by">
        <p>
          <a href="https://api.adviceslip.com/" target="_blank" rel="noreferrer">
            Advice Slip JSON API
          </a>
        </p>
      </Section>
    </footer>
  );
}

export default Footer;
