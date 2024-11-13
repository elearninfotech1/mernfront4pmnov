import React, { useEffect, useState } from "react";
import innerStyles from "./innerpageStyles.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
const TreatementDetails = () => {
  const [data, setData] = useState("");
  const { tid } = useParams();
  useEffect(() => {
    axios
      .get(`https://mernback4pmnov.onrender.com/treament/${tid}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <section className={innerStyles.bread}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>{data.tname}</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p>{data.tdesc}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TreatementDetails;
