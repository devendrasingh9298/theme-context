import { useContext } from "react";
import {ThemeContext} from '../context/ThemeCotext';


function ColorTheme(){

    const {darkTheme} = useContext(ThemeContext);

   const themeStyles = {
        backgroundColor: darkTheme? '#333' : '#ccc',
        color: darkTheme? '#ccc' : '#333'
   }

    // console.log(darkTheme);

    return(
        <div className="theme-wrapper" style={themeStyles}>
            <h3>This is a Text</h3>
        </div>
    );
};

export default ColorTheme;