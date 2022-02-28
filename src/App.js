import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    async function fetchRandomAdvice() {
      const response = await fetch("https://api.adviceslip.com/advice");
      const jsonResponse = await response.json();
      setAdvice(jsonResponse.slip.advice);
    }

    fetchRandomAdvice();
  }, [setAdvice]);

  return <div className="App">{advice}</div>;
}

export default App;
