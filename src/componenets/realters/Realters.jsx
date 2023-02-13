import React from "react";
import "./realters.scss";
const Realters = () => {
  return (
    <div className="realters-1">
      <h3>Top 3 Realters</h3>
      <div className="grid-realters">
        <div className="realters">
          <img src="realtor-1.jpeg" alt="" />
          <div className="realters-info">
            <p className="text">Erik Feinman</p>
            <h4 className="houses">
              245 houses <span>Sold</span>
            </h4>
          </div>
        </div>
        <div className="realters">
          <img src="realtor-2.jpeg" alt="" />
          <div className="realters-info">
            <p className="text">Kim Brown</p>
            <h4 className="houses">
              212 houses <span>Sold</span>
            </h4>
          </div>
        </div>
        <div className="realters">
          <img src="realtor-3.jpeg" alt="" />
          <div className="realters-info">
            <p className="text">Tobi ramsi </p>
            <h4 className="houses">
              198 houses <span>Sold</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Realters;
