import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import "./App.css";
import TechStack from "./components/Stacks/TechStack";
import DesignStack from "./components/Stacks/DesignStack";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <Routes>
      <Route path="/contact" element={<Contact />} />
      <Route path="/techstack" element={<TechStack />} />
      <Route path="designstack" element={<DesignStack />} />
      <Route path="/homepage" element={<Homepage />} />
    </Routes>
  );
}

export default App;
