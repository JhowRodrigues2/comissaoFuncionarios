import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Box } from "@mui/system";

function App() {
  return (
    <Box className="app">
      <Header />
      <Box className="content">
        {/* Adicione aqui o conteúdo principal da sua aplicação */}
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
