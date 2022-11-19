import './App.css';
import { ThemeContext } from './context/ThemeCotext';
import ColorTheme from './components/ColorTheme';
import {useState} from  "react";

function App() {

  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme(prevTheme => !prevTheme);
  }
  
  return (
    <div className="App">
     <ThemeContext.Provider value={{darkTheme}}>
          <ColorTheme />
          <button onClick={toggleTheme}>Toggle Theme</button>
     </ThemeContext.Provider>
    </div>
  );
}

export default App;