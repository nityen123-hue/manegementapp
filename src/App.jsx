import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/pages/Home"
import About from "./components/pages/About"

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App;
