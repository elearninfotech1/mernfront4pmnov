import React, { useEffect, useState } from "react";
import studentStyles from "./studentstyles.module.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const StudentEdit = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const { sid } = useParams();
  const navigate = useNavigate();
  //alert(sid);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/student/${sid}`)
      .then((res) => {
        setName(res.data.name);
        setEmail(res.data.email);
        setPhone(res.data.phone);
        setAge(res.data.age);
        setAddress(res.data.address);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const updateStudent = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:4000/student/${sid}`, {
        name,
        email,
        phone,
        age,
        address,
      })
      .then((res) => {
        alert("Data Updated Succ...");
        navigate("/");
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
              <h1>Edit Student</h1>
            </div>
          </div>
        </div>
      </section>
      <section className={`py-4 ${studentStyles.student}`}>
        <div className="container">
          <div className="row">
            <div className="col-4"></div>
            <div className="col-4">
              <div>
                <form>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      placeholder="Phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="age"
                      className="form-control"
                      placeholder="Age"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="address"
                      className="form-control"
                      placeholder="Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <button className="btn btn-success" onClick={updateStudent}>
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-4"></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default StudentEdit;
