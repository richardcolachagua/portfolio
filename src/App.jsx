import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import "./App.css";
import TechStack from "./components/TechStack";

function App() {
  return (
    <Routes>
      <Route path="/contact" element={<Contact />} />
      <Route path="/techstack" element={<TechStack />} />
    </Routes>
  );
}

export default App;
