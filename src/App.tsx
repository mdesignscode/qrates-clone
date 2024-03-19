import "./styles/main.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import { useState } from "react";
import RecordFormats from "./components/recordFormats";
import Features from "./components/features";
import StartNewProject from "./components/newProject";
import Community from "./components/community";
import Testimonies from "./components/testimonies";

function App() {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <div className="h-[100dvh] [min-width:320px] bg-dark flex flex-col overflow-y-auto">
      <Navbar showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
      <main className={`${!showNavbar ? "block" : "hidden"}`}>
        <Hero />
        <RecordFormats />
        <Features />
        <StartNewProject />
        <Community />
        <Testimonies />
      </main>
    </div>
  );
}

export default App;
