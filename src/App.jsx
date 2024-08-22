import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import "./App.css";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <Routes>
      <Route path="/contact" element={<Contact />} />

      <Route path="/homepage" element={<Homepage />} />
    </Routes>
  );
}

export default App;
