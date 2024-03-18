import "./styles/main.css"
import Navbar from "./components/navbar"

function App() {
  return (
    <div className="h-[100dvh] [min-width:320px] bg-dark flex flex-col overflow-y-hidden">
      <Navbar />
    </div>
  );
}

export default App
