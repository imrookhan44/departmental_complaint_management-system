import React, { useState } from "react";
import { registerComplaint } from "./../../Api/index";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function ComplaintBox() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [complaintType, setComplaintType] = useState("");
  const [concernedPerson, setConcernedPerson] = useState("");
  const [complaintDetail, setComplaintDetail] = useState("");

  const complaint = async () => {
    const data = {
      name,
      number,
      complaintType,
      concernedPerson,
      complaintDetail,
    };
    registerComplaint(data)
      .then((res) => {
        if (res.data.message === "complaint registered successfully") {
          toast.success(res.data.message, {
            theme: "colored",
          });
        } else {
          toast.error(res.message, {
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
      <div className="maindiv mt-3  ">
        <div
          className="signup-box"
          style={{ width: "50%", background: "dimgrey", margin: "auto", height: "85vh" }}
        >
          <h1 style={{ }} className="text-light text-center">
            Complaint Box
          </h1>
          <div id="form" style={{ marginLeft: "64px" }}>
            <label className="text-light">Name</label>
            <input
              type="text"
              placeholder
              required
              onChange={(event) => {
                setName(event.target.value);
              }}
              value={name}
            />
            <label className="text-light">Mobile Number</label>
            <input
              type="number"
              placeholder
              required
              onChange={(event) => {
                setNumber(event.target.value);
              }}
              value={number}
            />
            <labe className="text-light">Complaint Type</labe>
            <select
              name=""
              id=""
              onChange={(event) => {
                setComplaintType(event.target.value);
              }}
              value={complaintType}
              className="text-light"   >
              <option value="" selected>
                Choose complaint type
              </option>
              <option value="Academics">Academics</option>
              <option value="Bus">Bus</option>
              <option value="Fee">Fee</option>
              <option value="Class">Class</option>
              <option value="Teacher">Teacher</option>
              <option value="Other">Other</option>
            </select>
            <label className="text-light">Concerned Person</label>
            <select
              name=""
              id=""
              onChange={(event) => {
                setConcernedPerson(event.target.value);
              }}
              value={concernedPerson}
              className="text-light"    >
              <option value="" selected>
                Choose complaint type
              </option>
              <option value="Head of department">Head of department</option>
              <option value="vc">vc</option>
              <option value="Provost">Provost</option>
              <option value="sports">Sports</option>
              <option value="Other">Other</option>
            </select>
            <label className="text-light">Type Complaint</label>
            <textarea
              rows="4"
              cols="55"
              placeholder="Enter Your Complaint"
              onChange={(event) => {
                setComplaintDetail(event.target.value);
              }}
              value={complaintDetail}
            ></textarea>
            <div className="text-center">
              <button
                id="submitBtn"
                className="btn btn-primary"
                onClick={() => complaint()}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComplaintBox;
