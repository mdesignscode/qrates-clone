import "./styles/main.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import { useState } from "react";
import RecordFormats from "./components/recordFormats";

function App() {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <div className="h-[100dvh] [min-width:320px] bg-dark flex flex-col overflow-y-hidden">
      <Navbar showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
      <main
        className={`${!showNavbar ? "block" : "hidden"} h-full overflow-y-auto`}
      >
        <Hero />
        <RecordFormats />
      </main>
    </div>
  );
}

export default App;
