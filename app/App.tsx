import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles.scss";

//import pages from "pages"
import Home from "./pages/Home.page";
import About from "./pages/About.page";
import Error404 from "./pages/Error404.page";
//

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="*" element={<Error404/>} />
        </Routes>
    </Router>
);

export default App;