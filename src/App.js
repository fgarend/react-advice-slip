import { useEffect } from "react";

import "./App.css";

function App() {
  useEffect(() => {
    async function fetchRandomAdvice() {
      await fetch("https://api.adviceslip.com/advice");
    }

    fetchRandomAdvice();
  });

  return <div className="App">Hello World!</div>;
}

export default App;
