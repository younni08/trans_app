import React from "react";
import Topnavi from "./components/common/topnavi";
import {Link, Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import Home1 from "./components/home/home_image";
import Home2 from "./components/home/home_setting";
import Home3 from "./components/home/home_text";
import Home4 from "./components/home/home_history";

const Root = () => {
    return (
        <div className="root">
            <div>
                <Topnavi />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/1" element={<Home1 />} />
                    <Route exact path="/2" element={<Home3 />} />
                    <Route exact path="/3" element={<Home2 />} />
                    <Route exact path="/4" element={<Home4 />} />
                </Routes> 
            </div>
        </div>
    )
};

export default Root
