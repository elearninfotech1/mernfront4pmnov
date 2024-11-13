import axios from "axios";
import React, { useEffect, useState } from "react";
import "datatables.net-dt/css/dataTables.dataTables.min.css";
import "jquery/dist/jquery";
import $ from "jquery";
import DataTable from "datatables.net-dt/js/dataTables.dataTables";

const EditTreatment = () => {
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
  const deleteTreatment = (tid) => {
    axios
      .delete(`https://mernback4pmnov.onrender.com/treament/${tid}`)
      .then((res) => {
        alert("Treatment Deleted Succ..");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  setTimeout(() => {
    $(function () {
      new DataTable("#mytable");
    });
  }, 1000);

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="table-responsive">
                <table className="table table-bordered" id="mytable">
                  <thead>
                    <tr>
                      <th>T.Name</th>
                      <th>T.Desc</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((tret) => {
                      return (
                        <tr key={tret._id}>
                          <td>{tret.tname}</td>
                          <td>{tret.tdesc}</td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => deleteTreatment(tret._id)}
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
    </>
  );
};

export default EditTreatment;
