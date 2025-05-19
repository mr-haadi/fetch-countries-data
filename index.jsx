import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import CountriesDetail from "./components/CountriesDetail";
import Home from "./components/Home";

const root = createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} >
      <Route index element={<Home />} />
      <Route path=":country" element={<CountriesDetail />} />
      <Route path="contact" element={<h2>Contact US</h2>} />
      </Route>
    </Routes>
  </Router>
);
