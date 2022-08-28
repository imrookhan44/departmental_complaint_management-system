import React, { useState } from "react";
import "./../../styles/auth.css";
import { loginUser } from "./../../Api/index";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// toast.configure();

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
        console.log("res in login:", res);
        if (res.data.message === "user login successfully") {
          localStorage.setItem("token", res.data.token);
          toast.success(res.data.message, {
            theme: "colored",
          });
          navigate("/");
        } else {
          toast.error(res.data.message, {
            theme: "colored",
          });
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
        <div className=" mb-5">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
