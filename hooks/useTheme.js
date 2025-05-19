import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";


export function useTheme() {
      const [isDark, setDark] = useContext(ThemeContext)
      return [isDark, setDark]
}