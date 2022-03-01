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
    <main className="App">
      <blockquote cite={`https://api.adviceslip.com/advice/${slip.id}`}>{slip.advice}</blockquote>
    </main>
  );
}

export default App;
