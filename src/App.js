import "./App.css";
import { Routes, Route } from "react-router-dom";
import Rus from "./Rus.js";
import Eng from "./Eng.js";

function App() {

  return (
      <>
        <main>
          <Routes>
            <Route exact path="/" element={ <Rus /> } />
            <Route exact path="eng" element={ <Eng /> } />
          </Routes>
        </main>
      </>
  )
}

export default App
