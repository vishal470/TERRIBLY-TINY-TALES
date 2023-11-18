import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Summary.css";

function Summary() {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/summary");
        setSummary(response.data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  });
  return (
    <div>
      {/* POST */}
      <div>
        <hr style={{ width: "86px" }} />
        <div className="line">
          <div>
            <h4 className="post">{summary ? summary.post : "Loading..."}</h4>
          </div>
          <div>
            <hr style={{ height: "30px", marginLeft: "5px" }} />
          </div>
        </div>
        <hr style={{ marginLeft: "86px" }} />
      </div>

      {/* Summary */}
      <div className="summary">
        <div className="title">
          <div>
            <h3>{summary ? summary.title : "Loading..."}</h3>
          </div>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/8919/8919938.png"
              alt=""
              className="righticons"
            />
          </div>
        </div>

        <div className="paragraph">
          <p style={{ fontSize: "18px" }}>
            {summary ? summary.desc : "Loading..."}
          </p>
        </div>
      </div>

      <div className="extra">
        {/* MUSING */}
        <div>
          <p style={{ fontWeight: "bold" }}>
            <span style={{ color: "rgb(80, 172, 208)" }}>musing</span> by
            anujgosalia
          </p>
        </div>

        {/* Views */}
        <div>
          <p style={{ color: "#9A9A9A", paddingBottom: "35px" }}>
            August 2-2 mins Read - 102 Views
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Summary;
