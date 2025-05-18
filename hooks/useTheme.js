import { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";


export function useTheme() {
      const [isDark, setDark] = useContext(ThemeContext)
    
      return [isDark, setDark]
}