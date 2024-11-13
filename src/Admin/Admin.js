import React, { useState } from "react";
import adminstyles from "./adminStyles.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
const Admin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const adminCredentials = (e) => {
    e.preventDefault();
    axios
      .post("https://mernback4pmnov.onrender.com/login", { email, password })
      .then((res) => {
        if (res.data == "Valid") {
          navigate("/admindashboard");
        } else {
          alert("Invalid Username & Password");
          setEmail("");
          setPassword("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <main>
      <section className={adminstyles.bread}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Admin Login</h1>
            </div>
          </div>
        </div>
      </section>
      <section className={`py-5 ${adminstyles.student}`}>
        <div className="container">
          <div className="row">
            <div className="col-4"></div>
            <div className="col-4">
              <div className={adminstyles.form}>
                <form onSubmit={adminCredentials}>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Username"
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
                    <input type="submit" className="btn btn-success" />
                  </div>
                </form>

                <NavLink to="/register">Register Now</NavLink>
              </div>
            </div>
            <div className="col-4"></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Admin;
