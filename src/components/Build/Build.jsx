import React, { useEffect, useState } from "react";
import axios from "axios";

function Build() {
  const [build, setBuild] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/build");
        setBuild(response.data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  });
  return (
    <div>
      <div className="title">
        <h3>{build ? build.heading : "Loading..."}</h3>
      </div>

      <div className="paragraph">
        <p>Think about it - this cricket series was akin to therapy.</p>
      </div>

      <div className="paragraph">
        <dl>
          {build ? (
            build.steps.map((step, index) => (
              <dt key={index}>
                <p>{step.first}</p>
                <p>{step.second}</p>
                <p>{step.third}</p>
              </dt>
            ))
          ) : (
            <li>Loading...</li>
          )}
        </dl>
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
            November 18-1 min Read-228 Views
          </p>
        </div>
      </div>
    </div>
  );
}

export default Build;
