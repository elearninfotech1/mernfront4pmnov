import React, { useState } from "react";
import adminstyles from "./adminStyles.module.css";
import axios from "axios";
const AddTreatments = () => {
  const [tname, setTname] = useState("");
  const [tdesc, setTdesc] = useState("");
  const addTreatment = (e) => {
    e.preventDefault();
    axios
      .post("https://mernback4pmnov.onrender.com/treament", { tname, tdesc })
      .then((res) => {
        alert("Treatment Added Succ...");
        setTname("");
        setTdesc("");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section className={`${adminstyles.student}`}>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className={adminstyles.form}>
              <form onSubmit={addTreatment}>
                <div className="mb-4">
                  <input
                    type="text"
                    name="tname"
                    className="form-control"
                    placeholder="Treatment Name"
                    value={tname}
                    onChange={(e) => setTname(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    className="form-control"
                    placeholder="Treatment Desc"
                    value={tdesc}
                    onChange={(e) => setTdesc(e.target.value)}
                  ></textarea>
                </div>
                <div className="mb-4">
                  <input
                    type="submit"
                    className="btn btn-success"
                    value="Add Treatment"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddTreatments;
