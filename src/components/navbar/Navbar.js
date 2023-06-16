import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./../../styles/Navbar.css";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './navbar.css'
function Header() {
  let navigate = useNavigate();
  let userEmail = localStorage.getItem("email");

  const Logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    // window.location.reload();
    toast.success("Logout Successfully");
    navigate("/login");
    console.log("user is logout");
  };
  return (
    <div>
      <Navbar expand="lg" style={{ backgroundColor: "#003396" }}  >
        <Container fluid>
          <Navbar.Brand
            href="/"
            className="text-light
          "
            id="mainHead"
          >
            Departmental Complaint Management System
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              // className="me-auto my-2  my-lg-0  offset-lg-10 "
              className={
                `
                ${localStorage.getItem("token") ? "offset-lg-1" : "offset-lg-8"
                }
                `
              }

            >
              <Link to="/" className="text-light mt-2" id="navLink">
                Home
              </Link>
              {
                userEmail === "iamadmin@gmail.com" ? (
                  <Link to="/dashboard" className="text-light mt-2" id="navLink">
                    Dashboard
                  </Link>
                ) : (""

                )
              }
              {
                userEmail === "iamadmin@gmail.com" ? (
                  <Link to="/newUsers" className="text-light mt-2" id="navLink">
                    New Users
                  </Link>
                ) : (""

                )
              }
              {localStorage.getItem("token") ? (
                ""
              ) : (
                <Link to="/login" className="text-light mt-2" id="navLink">
                  Login
                </Link>
              )}
              {localStorage.getItem("token") ? (
                ""
              ) : (
                <Link to="/signup" className="text-light mt-2" id="navLink">
                  Register
                </Link>
              )}
              {
                userEmail === "iamadmin@gmail.com" ? "" :

                  <>
                    {localStorage.getItem("token") && (
                      <Link to="/complaint" className="text-light mt-2" id="navLink">
                        complaint Box
                      </Link>
                    )}
                  </>
              }

              {localStorage.getItem("token") && (
                <Link to="/complaintStatus" className="text-light mt-2" id="navLink">
                  complaint History
                </Link>
              )}
              {localStorage.getItem("token") && (
                <Link to="/myComplaints" className="text-light mt-2" id="navLink">
                  My complaints
                </Link>
              )}

              {localStorage.getItem("token") ? (
                <button
                  onClick={() => Logout()}
                  className="btn btn-primary  my-2 my-sm-0" id="navLink"
                >
                  Logout
                </button>
              ) : (
                ""
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ToastContainer />
    </div>
  );
}

export default Header;
