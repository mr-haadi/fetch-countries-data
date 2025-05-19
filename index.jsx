import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import CountriesDetail from "./components/CountriesDetail";
import Home from "./components/Home";
import Error from "./components/Error";
import { Contact } from "./components/Contact";

const root = createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} >
      <Route index element={<Home />} />
      <Route path=":country" element={<CountriesDetail key={window.location.pathname} />} />
      <Route path="contact" element={<Contact/>} />
      <Route path="*" element={<Error/>} />
      </Route>
    </Routes>
  </Router>
);
