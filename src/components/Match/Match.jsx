import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Match.css";

function Match() {
  const [match, setMatch] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/match");
        setMatch(response.data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  });

  return (
    <div>
      <div className="title">
        <h3>{match ? match.teams : "Loading..."}</h3>
      </div>

      <div className="paragraph">
        <p>{match ? match.para1 : "Loading..."}</p>
      </div>

      <div className="paragraph">
        <p>{match ? match.para2 : "Loading..."}</p>
      </div>

      <div className="extra">
        <div>
          <p style={{ fontWeight: "bold" }}>
            <span style={{ color: "rgb(80, 172, 208)" }}>musing</span> by
            anujgosalia
          </p>
        </div>

        <div>
          <p style={{ color: "#9A9A9A", paddingBottom: "35px" }}>
            January 21 1 min Read 156 Views
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Match;
