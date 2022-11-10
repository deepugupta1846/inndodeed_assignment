import React, { useState } from "react";
import { cars } from "../API/cars";
import { CarCard } from "./CarCard";

export const ShowAllCars = () => {
  const [selectBodyType, setBodyType] = useState("");
  const [searchModelName, setModelName] = useState("");
  const carsData = cars;
  return (
    <>
      <div className="cars-container">
        <div className="filter">
          <div className="dropdown">
            <div className="select">
              <select
                onChange={(e) => {
                  setBodyType(e.target.value);
                }}
              >
                <option value="">Select Body Type</option>
                <option value="SUV">SUV</option>
                <option value="ESTATE">ESTATE</option>
                <option value="SEDAN">SEDAN</option>
              </select>
            </div>
          </div>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search by Model Name"
              value={searchModelName}
              onChange={(e) => {
                setModelName(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="all-cars">
          {carsData
            .filter((d) => {
              if (selectBodyType === "") {
                return d;
              } else if (
                d.bodyType.toLowerCase().match(selectBodyType.toLowerCase())
              ) {
                return d;
              }
            })
            .filter((d) => {
              if (searchModelName === "") {
                return d;
              } else if (
                d.modelName.toLowerCase().match(searchModelName.toLowerCase())
              ) {
                return d;
              }
            })
            .map((car) => {
              return <CarCard data={car} />;
            })}
        </div>
      </div>
    </>
  );
};
