import { ThemeContext } from '../context/ThemeCotext';
import ColorTheme from './ColorTheme';

import {useState} from  "react";

function  DarkThemeComponent(){
    const [darkTheme, setDarkTheme] = useState(true);

    const toggleTheme = () => {
        setDarkTheme(prevTheme => !prevTheme);
      } 

    return (        
         <ThemeContext.Provider value={{darkTheme}}>
              <ColorTheme />
              <button onClick={toggleTheme}>Toggle Theme</button>
         </ThemeContext.Provider>
       );
};

export default DarkThemeComponent;