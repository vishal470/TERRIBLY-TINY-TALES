import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Bio.css";

function Bio() {
  const [ceoData, setCeoData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/users");
        setCeoData(response.data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {/* Name */}
      <div className="ceoName">
        <div>
          <h3>{ceoData ? ceoData.name : "Loading..."}</h3>
        </div>
        <div className="follow">
          <div>
            <div
              style={{
                textAlign: "center",
                border: "2px solid #9A9A9A",
                borderRadius: "5px",
              }}
            >
              {ceoData ? ceoData.followers : "Loading..."}
            </div>
            <div>Followers</div>
          </div>
          <div>
            <div
              style={{
                textAlign: "center",
                border: "2px solid #9A9A9A",
                borderRadius: "5px",
              }}
            >
              {ceoData ? ceoData.following : "Loading..."}
            </div>
            <div>Following</div>
          </div>
        </div>
      </div>

      {/* BIO */}
      <div className="bio">
        <div style={{ fontSize: "15px" }}>
          {ceoData ? ceoData.role : "Loading..."}
        </div>
        <div>
          <a className="insta" href={ceoData ? ceoData.insta : "Loading..."}>
            {ceoData ? ceoData.insta : "Loading..."}
          </a>
        </div>

        {/* Icon */}

      <div className="icon">
        <div>125</div>
        <div>12</div>
        <div>57</div>
        <div>26.0k</div>
      </div>
      </div>



      
    </div>
  );
}

export default Bio;
