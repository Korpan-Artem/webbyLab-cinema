import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./modules/HomePage";
import NotFound from "./modules/NotFound";


function App() {

  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="/weather" element={<HomePage />} />
        <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
