import React from "react";
import { Routes, Route } from "react-router-dom";
import Faq from "./components/Faq";
import Home from "./components/Home";
import TwitchStatus from "./components/TwitchStatus";

function Routers() {
    return (
    <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/faq" element={<Faq />} />
        <Route path="/twitch" element={<TwitchStatus></TwitchStatus>}/>
    </Routes>
    )
    }
export default Routers