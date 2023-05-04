import React, { useState } from "react";
import "./../../styles/auth.css";
import { loginUser } from "./../../Api/index";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// toast.configure();
const success = () => {
  toast.success("Login Successfull");
};

const error = () => {
  toast.error("error", {
    theme: "colored",
  });
};
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = async () => {
    const data = {
      email,
      password,
    };
    loginUser(data)
      .then((res) => {
        // console.log("res in login:", res.data);
        if (res.data.message === "user login successfully") {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("email", res.data.email1);
          toast.success(res.data.message);
          navigate("/");
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
        alert("there is an error");
      });
    // window.location.reload();
  };

  return (
    <div>
      <div>
        <div className="mb-5">
          <div className="row mt-80">
            <div className="col-8">
              <div className="bgImage"></div>
            </div>
            <div className="col-4">
              <h1>Login</h1>
              <div id="form">
                <label>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
                <div className="text-center mt-2">
                  <button
                    id="submitBtn"
                    className="btn btn-success"
                    onClick={() => login()}
                  >
                    Submit
                  </button>
                </div>
                <div className="d-flex justify-content-end">
                  <Link to="/forgetPassword">Forget Password</Link>
                </div>
              </div>
              <div className="text-center mt-2">
                <p>
                  Don't have an account? <Link to="/signup">Sign Up</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
