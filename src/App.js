import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import Layout from "./components/Layout";
import AboutPage from "./modules/AboutPage";
import HomePage from "./modules/HomePage";
import NotFound from "./modules/NotFound";


function App() {

  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
