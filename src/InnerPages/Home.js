import React, { useEffect, useState } from "react";
import banner from "./banner.jpg";
import innerStyles from "./innerpageStyles.module.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://mernback4pmnov.onrender.com/treament`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <>
      <section>
        <div>
          <img src={banner} alt="Banner" />
        </div>
      </section>
      <section className={`py-4 ${innerStyles.treatment}`}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className={innerStyles.title}>Our Treatment</h1>
              <div className="row">
                {data.map((tret) => {
                  return (
                    <div className="col-md-3">
                      <div className="border border-2 border-primary py-2 ps-3 mb-4">
                        <NavLink to={`/treatementdetails/${tret._id}`}>
                          {tret.tname}
                        </NavLink>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
