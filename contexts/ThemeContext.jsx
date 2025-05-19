import { createContext } from "react";
import { useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setDark] = useState(() => {
  const stored = localStorage.getItem("isDarkMode");
  return stored !== null ? JSON.parse(stored) : true; // default to true
});

  return <ThemeContext.Provider value={[isDark, setDark]}>{children}</ThemeContext.Provider>;
}