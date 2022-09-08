import React from "react";
import Login from "../components/login/Login";
import Singup from "../components/signup/Signup";
import { Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import ComplaintBox from "../components/complaintBox/ComplaintBox";
import ComplaintStatus from "../components/complaintStatus/ComplaintStatus";
function Routess() {
  return (
    <div>
      <Routes>
        <Route exact path="login" element={<Login />} />
        <Route exact path="signup" element={<Singup />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/complaint" element={<ComplaintBox />} />
        <Route exact path="/complaintStatus" element={<ComplaintStatus />} />
      </Routes>
    </div>
  );
}

export default Routess;
