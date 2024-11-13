import React, { useState } from "react";
import adminstyles from "./adminStyles.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();
  const addStudent = (e) => {
    e.preventDefault();
    axios
      .post(`https://mernback4pmnov.onrender.com/signup`, {
        name,
        email,
        password,
        phone,
        address,
      })
      .then((res) => {
        alert("User Added Succ...");
        navigate("/admin");
      })
      .catch((err) => {
        alert("Unable to add student");
      });
  };
  return (
    <main>
      <section className={adminstyles.bread}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Register</h1>
            </div>
          </div>
        </div>
      </section>
      <section className={`py-4 ${adminstyles.student}`}>
        <div className="container">
          <div className="row">
            <div className="col-4"></div>
            <div className="col-4">
              <div className={adminstyles.form}>
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
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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
                      name="address"
                      className="form-control"
                      placeholder="Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="submit"
                      className="btn btn-success"
                      value="Register Now"
                    />
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

export default Register;
