import { createContext } from "react";
import { useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setDark] = useState(
    JSON.parse(localStorage.getItem("isDarkMode"))
  );

  return <ThemeContext value={[isDark, setDark]}>{children}</ThemeContext>;
}