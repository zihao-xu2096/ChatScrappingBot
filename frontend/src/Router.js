import React from "react";
import { Routes, Route } from "react-router-dom";
import Faq from "./components/Faq";
import Home from "./components/Home";
import TwitchStatus from "./components/TwitchStatus";
import Login from "./components/Login"

function Routers() {
    return (
    <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/faq" element={<Faq />} />
        <Route path="/twitch" element={<TwitchStatus></TwitchStatus>}/>
        <Route path="/login" element={<Login></Login>} />
    </Routes>
    )
    }
export default Routers