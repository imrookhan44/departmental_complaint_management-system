import React from "react";
import Login from "../components/login/Login";
import Singup from "../components/signup/Signup";
import { Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import ComplaintBox from "../components/complaintBox/ComplaintBox";
import ComplaintStatus from "../components/complaintStatus/ComplaintStatus";
import ForgetPassword from "../components/ForgetPassword/ForgetPassword";
import DashBoard from "../components/dashboard/Dashboard";
import MyComplaints from "../components/myComplaints/MyComplaints";
import NewUsers from "../components/newUsers/NewUsers";
function Routess() {
  return (
    <div>
      <Routes>
        <Route exact path="login" element={<Login />} />
        <Route exact path="signup" element={<Singup />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/complaint" element={<ComplaintBox />} />
        <Route exact path="/complaintStatus" element={<ComplaintStatus />} />
        <Route exact path="/forgetPassword" element={<ForgetPassword />} />
        <Route exact path="/dashboard" element={<DashBoard />} />
        <Route exact path="/myComplaints" element={<MyComplaints />} />
        <Route exact path="/newUsers" element={<NewUsers />} />
      </Routes>
    </div>
  );
}

export default Routess;
