import React, { useState, useEffect} from 'react'
import {complaintStatus} from './../../Api/index'
function ComplaintStatus() {
    const [complaints, setComplaints] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        complaintStatus()
            .then((res) => {
                console.log("res in complaintStatus:", res);
                setComplaints(res.data);
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
         {
              complaints.map((complaint) => {

                    return (
                        <div className="text-center">

                            <h1>{complaint.status}</h1>
                        </div>
                    )
              }
              )

         }

    </div>
  )
}

export default ComplaintStatus
