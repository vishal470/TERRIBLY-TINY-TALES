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
          <h3>
            {ceoData ? ceoData.name : "Loading..."}
            &nbsp;
            <img
                src="https://cdn-icons-png.flaticon.com/512/12274/12274673.png"
                alt=""
                className="ceoicons"
              />
              &nbsp;
              <img
                src="https://cdn-icons-png.flaticon.com/512/3572/3572055.png"
                alt=""
                className="ceoicons"
              />
          </h3>
        </div>
        <div className="follow">
          <div>
            <div
              style={{
                textAlign: "center",
                border: "2px solid #9A9A9A",
                borderRadius: "5px",
                fontSize:"18px",
                padding:"2px 5px 2px 5px"
              }}
            >
              {ceoData ? ceoData.followers : "Loading..."}
            </div>
            <div style={{fontSize:"10px",textAlign:"center"}}>Followers</div>
          </div>
          <div>
            <div
              style={{
                textAlign: "center",
                border: "2px solid #9A9A9A",
                borderRadius: "5px",
                fontSize:"18px",
                padding:"2px 12px 2px 12px"
              }}
            >
              {ceoData ? ceoData.following : "Loading..."}
            </div>
            <div style={{fontSize:"10px",textAlign:"center"}}>Following</div>
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
          <div className="allicons">
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3334/3334338.png"
                alt=""
                className="icons"
              />
            </div>
            <div>125</div>
          </div>


          <div className="allicons">
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/8919/8919938.png"
                alt=""
                className="icons"
              />
            </div>
            <div>12</div>
          </div>


          <div className="allicons">
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/12209/12209694.png"
                alt=""
                className="icons"
              />
            </div>
            <div>57.8k</div>
          </div>


          <div className="allicons">
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/10307/10307888.png"
                alt=""
                className="icons"
              />
            </div>
            <div>26.0k</div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Bio;
