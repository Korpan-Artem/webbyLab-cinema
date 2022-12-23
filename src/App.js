import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./modules/HomePage";
import NotFound from "./modules/NotFound";
import CityPage from "./modules/CityPage";


function App() {

  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="/weather" element={<HomePage />} />
        <Route path="/:id" element={<CityPage/>} />
        <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
