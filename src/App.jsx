

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import Companies from "./Companies";
import Investment from "./Investment";
import GlobalNetwork from "./GlobalNetwork";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/companies"
          element={<Companies />}
        />

        <Route
          path="/investment"
          element={<Investment />}
        />

        <Route
          path="/network"
          element={<GlobalNetwork />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/quote"
          element={<h1 style={{ color: "white", textAlign: "center" }}>
            Get Quote
          </h1>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;