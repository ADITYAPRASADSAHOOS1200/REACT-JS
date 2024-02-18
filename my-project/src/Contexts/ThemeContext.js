import { useContext } from "react";
import { createContext } from "react";


export const ThemeContext=createContext({
    themeMode:"light",
    darkMode:()=>{},
   LightMode :()=>{},
})

export const ThemeProvider=ThemeContext.Provider;

export default function useTheme(){
  return useContext(ThemeContext)
}