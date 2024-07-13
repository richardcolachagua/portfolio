import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/contact" element={<Contact />} />
      <Route />
    </Routes>
  );
}

export default App;
