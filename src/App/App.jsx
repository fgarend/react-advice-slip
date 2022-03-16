import Footer from "../Footer";
import Header from "../components/Header";
import useAdviceSlip from "../hooks/useAdviceSlip";
import Main from "../Main";

import "./App.css";

function App() {
  const slip = useAdviceSlip();

  return (
    <div className="App">
      <Header />
      <Main slip={slip} />
      <Footer />
    </div>
  );
}

export default App;
