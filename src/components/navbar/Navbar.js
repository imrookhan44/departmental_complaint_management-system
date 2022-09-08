import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./../../styles/Navbar.css";
import { useNavigate, Link } from "react-router-dom";
import {toast} from "react-toastify"
function Header() {
  let navigate = useNavigate();

  const Logout = () => {
    localStorage.removeItem("token");
    // window.location.reload();
    toast.success("Logout Successfully");
    navigate("/login");
    console.log("user is logout");
  };
  return (
    <div>
      <Navbar  expand="lg" style={{backgroundColor: "#0298a3"}}  >
        <Container fluid>
          <Navbar.Brand
            href="/"
            className="text-light
          "
            id="mainHead"
          >
            Complaint Web App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2  my-lg-0  offset-lg-6 "
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/" className="text-light" id="navLink">
                Home
              </Link>&nbsp;&nbsp;&nbsp;
              {localStorage.getItem("token") ? (
                ""
              ) : (
                <Link to="/login" className="text-light" id="navLink">
                  Login
                </Link>
              )}&nbsp;&nbsp;&nbsp;
              {localStorage.getItem("token") ? (
                ""
              ) : (
                <Link to="/signup" className="text-light" id="navLink">
                  Register
                </Link>
              )}&nbsp;&nbsp;&nbsp;

              {localStorage.getItem("token") && (
                <Link to="/complaint"  className="text-light" id="navLink">
                  complaint Box
                </Link>
              )}&nbsp;&nbsp;&nbsp;
             {localStorage.getItem("token") && (
                <Link to="/complaintStatus"  className="text-light" id="navLink">
                  complaint Status
                </Link>
              )}&nbsp;&nbsp;&nbsp;
              {localStorage.getItem("token") ? (
                <button
                  onClick={() => Logout()}
                  className="btn btn-primary  my-2 my-sm-0"
                >
                  Logout
                </button>
              ) : (
                ""
              )}&nbsp;&nbsp;&nbsp;
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
