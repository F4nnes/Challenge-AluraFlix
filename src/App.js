
import './App.css';
import Home from "./pages/Home"
import NuevoVideo from "./pages/NuevoVideo"
import Header from "./Componentes/Header/Header.js"
import Footer from "./Componentes/Footer/Footer.js"


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nuevoVideo" element={<NuevoVideo />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
