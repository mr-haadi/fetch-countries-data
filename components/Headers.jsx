import { useTheme } from "../hooks/useTheme";


const Headers = () => {
  const [isDark, setDark] = useTheme()

  if (isDark) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
  return (
    <header className="header">
      <div className="header-content">
        <h2>
          <a href="/">Where in the world?</a>
        </h2>
        <span
          className="dark-mode"
          onClick={() => {
            setDark(!isDark);
            localStorage.setItem("isDarkMode", !isDark);
          }}
        >
          <i className={`fa-solid fa-${isDark ? "sun" : "moon"}`} /> &nbsp;
          {isDark ? "Light" : "Dark"} Mode
        </span>
      </div>
    </header>
  );
};

export default Headers;
