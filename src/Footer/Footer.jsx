import React from "react";

function Footer() {
  return (
    <footer>
      <section>
        <h2>Developed by</h2>
        <p>Felipe Gabriel Arend</p>
      </section>
      <section>
        <h2>Social Media</h2>
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
      </section>
      <section>
        <h2>Advices powered by</h2>
        <p>
          <a href="https://api.adviceslip.com/" target="_blank" rel="noreferrer">
            Advice Slip JSON API
          </a>
        </p>
      </section>
    </footer>
  );
}

export default Footer;
