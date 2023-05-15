import React, { useState, useEffect } from 'react'
import { complaintStatus, getComplaint } from './../../Api/index'
function ComplaintStatus() {
    let userEmail = localStorage.getItem("email");

    const [complaints, setComplaints] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getComplaint()
            .then((res) => {
                console.log("res in complaintStatus:", res.data);
                if (userEmail === "hod@gmail.com") {
                    setComplaints(res.data.filter((complaint) => complaint.concernedPerson === "Head of department"))
                    console.log("complaints in complaintStatus:", complaints);
                }
                else if (userEmail === "coordinator@gmail.com") {
                    setComplaints(res.data.filter((complaint) => complaint.concernedPerson === "Coordinator"))
                    console.log("complaints in complaintStatus:", complaints);
                }
                else if (userEmail === "examController@gmail.com") {
                    setComplaints(res.data.filter((complaint) => complaint.concernedPerson === "Exam controller"))
                }
                else if (userEmail === "iamadmin@gmail.com") {
                    setComplaints(res.data)

                }
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setError(error);
                setLoading(false);
            });
    }, []);


    return (
        <div>
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
        </div>
    )
}

export default ComplaintStatus
