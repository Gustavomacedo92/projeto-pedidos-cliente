import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home"
import Users from "./pages/Users";

function myRoutes() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/usuarios" element={<Users/>}></Route>
            </Routes>

        </Router>


    )
}

export default myRoutes