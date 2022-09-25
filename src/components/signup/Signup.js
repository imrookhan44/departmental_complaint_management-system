import React, { useState } from "react";
import "./../../styles/auth.css";
import { registerUser } from "./../../Api/index";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Signup() {
  let navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const register = async () => {
    const data = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    };
    registerUser(data)
      .then((res) => {
        console.log("res in signup:", res);
        console.log("res.data.message in signup:", res.data);

        if (res.data.message === "user has been registered") {
          localStorage.setItem("token", res.data.token);
          toast.success(res.data, {
            theme: "colored",
          });
          navigate("/");
        } else {
          toast.error(res.data, {
            theme: "colored",
          });
        }
      })
      .catch((error) => {
        console.log(error);
        alert("there is an error");
      });
  };

  return (
    <div>
      <div className="maindiv">
        <div className="row ">
          <div className="col-8">
            <div className="bgImage"></div>
          </div>
          <div className="col-4">
            <h1>Sign Up</h1>
            <div id="form">
              <label>First Name</label>
              <input
                type="text"
                required
                value={firstName}
                onChange={(event) => {
                  setFirstName(event.target.value);
                }}
              />
              <label>Last Name</label>
              <input
                type="text"
                required
                value={lastName}
                onChange={(event) => {
                  setLastName(event.target.value);
                }}
              />
              <label>Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <label>Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <label>Confirm Password</label>
              <input
                type="password"
                required
                value={confirmPassword}
                onChange={(event) => {
                  setConfirmPassword(event.target.value);
                }}
              />
              <div className="text-center mt-2 ">
                <button
                  id="submitBtn"
                  className="btn btn-success"
                  onClick={() => register()}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
