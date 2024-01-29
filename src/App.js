import "./App.css";
import { Routes, Route } from "react-router-dom";
import Rus from "./Rus.js";
import Eng from "./Eng.js";

function App() {

  return (
      <>
        <main>
          <Routes>
            <Route path="/" element={ <Rus /> } />
            <Route path="eng" element={ <Eng /> } />
          </Routes>
        </main>
      </>
  )
}

export default App
