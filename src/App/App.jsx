import { useEffect, useState } from "react";

import Header from "../Header";
import Main from "../Main";

import "./App.css";

function App() {
  const [slip, setSlip] = useState({});

  useEffect(() => {
    async function fetchRandomAdvice() {
      const response = await fetch("https://api.adviceslip.com/advice");
      const jsonResponse = await response.json();
      setSlip(jsonResponse.slip);
    }

    fetchRandomAdvice();
  }, [setSlip]);

  return (
    <div className="App">
      <Header />
      <Main slip={slip} />
      <footer>
        <article>
          <h2>Developed by</h2>
          <p>Felipe Gabriel Arend</p>
        </article>
        <article>
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
        </article>
        <article>
          <h2>Advices powered by</h2>
          <p>
            <a href="https://api.adviceslip.com/" target="_blank" rel="noreferrer">
              Advice Slip JSON API
            </a>
          </p>
        </article>
      </footer>
    </div>
  );
}

export default App;
