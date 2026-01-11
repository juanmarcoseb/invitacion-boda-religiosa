import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import RSVP from "./pages/RSVP"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rsvp" element={<RSVP />} />
    </Routes>
  )
}

export default App
