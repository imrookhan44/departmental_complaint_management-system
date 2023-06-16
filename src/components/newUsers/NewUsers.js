import React, { useState, useEffect } from 'react'
import { getNewUsers, updateUserStatus } from '../../Api/index'
function NewUsers() {
  const [data, setData] = useState([])
  const [status, setStatus] = useState("")

  const getAllUsers = async () => {
    getNewUsers()
      .then((res) => {
        console.log("res in :", res.data);
        setData(res.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getAllUsers()
  }, []);
  return (
    <>
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">
              Name
            </th>
            <th scope="col">Email</th>
            <th scope="col">Registration Number</th>
            <th scope="col">Allow</th>
            <th scope="col">Block</th>
          </tr>
        </thead>
        <tbody>
          {
            Array.isArray(data) && data.map((data) => {
              console.log("data:", data)
              return (
                <tr>
                  <th>{data._id}</th>
                  <td>{data.firstName}</td>
                  <td>{data.email}</td>
                  <td>{data.registrationNumber}</td>
                  <td>
                    <input type="radio"
                      checked={data.status === true ? true : false}

                      onChange={(e) => {
                        console.log("e:", e.target.checked)
                        const payload = { status: true, id: data._id }
                        updateUserStatus(
                          payload
                        )
                          .then((res) => {
                            console.log("res:", res)
                            getAllUsers();

                          })
                          .catch((error) => {
                            console.log("error:", error)
                          })
                      }
                      }


                    />
                  </td>
                  <td>
                    <input type="radio"
                      checked={data.status === false ? true : false}
                      onChange={(e) => {
                        const payload = { status: false, id: data._id }

                        updateUserStatus(payload)
                          .then((res) => {
                            console.log("res:", res)
                            getAllUsers();
                          })
                          .catch((error) => {
                            console.log("error:", error)
                          })
                      }
                      }

                    />
                  </td>
                </tr>)
            })

          }
        </tbody>
      </table>
    </>
  )
}

export default NewUsers