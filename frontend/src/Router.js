import React from "react";
import { Routes, Route } from "react-router-dom";
import Faq from "./components/Faq";
import Home from "./components/Home";
import TwitchStatus from "./components/TwitchStatus";
import Login from "./components/Login"
import Signup from "./components/Signup";

function Routers() {
    return (
    <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/faq" element={<Faq />} />
        <Route path="/twitch" element={<TwitchStatus></TwitchStatus>}/>
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<Signup></Signup>}/>
    </Routes>
    )
    }
export default Routers