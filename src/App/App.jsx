import { useEffect, useState } from "react";

import Footer from "../Footer";
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
      <Footer />
    </div>
  );
}

export default App;
