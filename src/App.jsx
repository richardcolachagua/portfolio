import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import "./App.css";
import TechStack from "./components/TechStack";
import DesignStack from "./components/DesignStack";

function App() {
  return (
    <Routes>
      <Route path="/contact" element={<Contact />} />
      <Route path="/techstack" element={<TechStack />} />
      <Route path="designstack" element={<DesignStack />} />
    </Routes>
  );
}

export default App;
