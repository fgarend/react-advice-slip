import { useEffect, useState } from "react";

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
      <header>
        <h1>Advice Slip</h1>
      </header>
      <main>
        <blockquote cite={`https://api.adviceslip.com/advice/${slip.id}`}>{slip.advice}</blockquote>
      </main>
    </div>
  );
}

export default App;
