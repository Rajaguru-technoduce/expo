import React,{createContext} from "react";
import { theme } from "../theme";
export const ThemeStyles=createContext();

export const ThemeOverallStyle=({children})=>{
    const Theme=theme;
    return(
 <ThemeStyles.Provider value={Theme}>
     {children}
 </ThemeStyles.Provider>
    )
}
export default ThemeOverallStyle;