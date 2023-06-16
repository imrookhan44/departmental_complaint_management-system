import React, { useEffect, useState } from 'react'
import { complaintsById, deleteComplaintById } from './../../Api/index'
function MyComplaints() {
  const userId = localStorage.getItem("userId")
  console.log("userId:", userId)
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getComplaints = async () => {
    complaintsById({ userId: userId })
      .then((res) => {
        console.log("res in :", res.data);
        setComplaints(res.data)
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setLoading(false);
      });
  }

  useEffect(() => {
    getComplaints()
  }, []);
  // const deleteComplaint = (id) => {
  //   deleteComplaintById(id)
  //     .then((res) => {
  //       console.log("res in :", res.data);
  //       setComplaints(res.data)
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setError(error);
  //       setLoading(false);
  //     });
  // }
  return (
    <>
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">
              Name
            </th>
            <th scope="col">Number</th>
            <th scope="col">Concerned Person</th>
            <th scope="col">Complaint Details</th>
            <th scope="col">Complaint Type</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            Array.isArray(complaints) && complaints.map((complaint) => {
              return (
                <tr>
                  <th>{complaint._id}</th>
                  <td>{complaint.name}</td>
                  <td>{complaint.number}</td>
                  <td>{complaint.concernedPerson}</td>
                  <td>{complaint.complaintDetail}</td>
                  <td>{complaint.complaintType}</td>
                  <td>{complaint.status}</td>
                  <td><button className='btn btn-danger'
                  // onClick={deleteComplaint(complaint._id)}
                  >Delete</button> </td>
                </tr>)
            })

            // complaints?.map((complaint) => {
            //     return (
            //         <tr>
            //             <th>{complaint._id}</th>
            //             <td>{complaint.name}</td>
            //             <td>{complaint.number}</td>
            //             <td>{complaint.concernedPerson}</td>
            //             <td>{complaint.complaintDetail}</td>
            //             <td>{complaint.complaintType}</td>
            //         </tr>)
            // })
          }
        </tbody>
      </table>
    </>
  )
}

export default MyComplaints