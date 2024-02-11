import { useState } from "react";
import Dasboard from "./components/Dasboard";
import logo from "./logo.svg";
import ThemeContext from "./Theme/Theme";
import StockContext from "./Theme/StockConstex";

function App() {
  
  const [darkMode, setDarkMode] = useState(true);
  const [stockSymbol, setStockSymbol] = useState("FB");

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
        <Dasboard />
      </StockContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
