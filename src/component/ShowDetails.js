import React from "react";
import { useLocation } from "react-router-dom";
import buyIcons from "./assets/assets.png";
export const ShowDetails = () => {
  const location = useLocation();
  const data = location.state;
  return (
    <>
      <div className="cars-details">
        <div className="car-image">
          <img src={data.imageUrl} />
        </div>
        <div className="about">
          <div className="about-container">
            <div className="about-details">
              <label className="about-title">ID </label>
              <label>{data.id}</label>
            </div>
            <div className="about-details">
              <label className="about-title">Body Type </label>
              <label>{data.bodyType}</label>
            </div>
            <div className="about-details">
              <label className="about-title">Model Name </label>
              <label>{data.modelName}</label>
            </div>
            <div className="about-details">
              <label className="about-title">Model Type </label>
              <label>{data.modelType}</label>
            </div>
            <div className="about-details">
              <div className="about-title buy-button">
                <img src={buyIcons} />
                <label>BUY</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
