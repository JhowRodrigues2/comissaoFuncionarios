import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Employee from "./pages/Employee";
import { Home } from "./pages/Home";
import { Sales } from "./pages/Sales";
import { Commission } from "./pages/Commission";
function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/funcionarios" element={<Employee />} />{" "}
            {/* Rota para o componente Employee */}
            <Route path="/vendas" element={<Sales />} />
            <Route path="/comissoes" element={<Commission />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
