import React, { useEffect, useState } from "react";
import studentStyles from "./studentstyles.module.css";
import axios from "axios";
const DeleteStudent = () => {
  const [student, setStudent] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/student`)
      .then((res) => {
        setStudent(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  const deleteStudent = (sid) => {
    axios
      .delete(`http://localhost:4000/student/${sid}`)
      .then((res) => {
        alert("Student Deleted Suc...");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <main>
      <section className={studentStyles.bread}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Delete Student</h1>
            </div>
          </div>
        </div>
      </section>
      <section className={`py-4 ${studentStyles.student}`}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Age</th>
                      <th>Address</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {student.map((stu) => {
                      return (
                        <tr key={stu._id}>
                          <td>{stu.name}</td>
                          <td>{stu.email}</td>
                          <td>{stu.phone}</td>
                          <td>{stu.age}</td>
                          <td>{stu.address}</td>
                          <td>
                            <button
                              class="btn btn-danger"
                              onClick={() => deleteStudent(stu._id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DeleteStudent;
