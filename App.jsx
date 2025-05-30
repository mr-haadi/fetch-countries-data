import Header from "./components/Headers";
import './App.css'
import { Outlet } from "react-router-dom";
import { ThemeProvider } from './contexts/ThemeContext';


const App = () => {
  return (
      <ThemeProvider>
       <Header />
      <Outlet />
      </ThemeProvider>
  );
};

export default App;
