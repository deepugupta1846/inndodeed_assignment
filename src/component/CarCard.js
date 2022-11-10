import React from "react";
import { useNavigate } from "react-router-dom";
export const CarCard = (props) => {
  const { data } = props;
  const navigate = useNavigate();
  return (
    <>
      <div className="card">
        <div className="card_container">
          <div className="card_header">
            <label className="title">{data.bodyType}</label>
            <div className="sub-title">
              <label className="model">{data.modelName}</label>
              <label className="bodytype">{data.modelType}</label>
            </div>
          </div>
          <div className="card_body">
            <div className="image">
              <img src={data.imageUrl} />
            </div>
          </div>
          <div className="card_footer">
            <div
              className="learn"
              onClick={() => {
                navigate("/learn", { state: data });
              }}
            >
              LEARN &gt;
            </div>
            <div
              className="shop"
              onClick={() => {
                navigate("/shop", { state: data });
              }}
            >
              SHOP &gt;
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
