import React, { useState } from "react";
import studentStyles from "./studentstyles.module.css";
import axios from "axios";
const AddStudent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const addStudent = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:4000/student`, {
        name,
        email,
        phone,
        age,
        address,
      })
      .then((res) => {
        alert("Student Added Succ...");
        setName("");
        setEmail("");
        setPhone("");
        setAge("");
        setAddress("");
      })
      .catch((err) => {
        alert("Unable to add student");
      });
  };
  return (
    <main>
      <section className={studentStyles.bread}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Add Student</h1>
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
                <form onSubmit={addStudent}>
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
                    <input type="submit" className="btn btn-success" />
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

export default AddStudent;
