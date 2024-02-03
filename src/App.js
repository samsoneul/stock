import { useState } from 'react';
import Dasboard from './components/Dasboard';
import logo from './logo.svg';
import ThemeContext from './Theme/Theme';


function App() {
  const [darkMode,setDarkMOde]=useState(false)

  return (
    <ThemeContext.Provider value={{ darkMode,setDarkMOde }}>
      <Dasboard/>
    </ThemeContext.Provider>
    
  );
}

export default App;
