import React from "react";
import { useNavigate } from "react-router-dom";

const TripsTravel = ({ trip }) => {
  const navigator = useNavigate();
  const handleBook = (id) => {
    navigator(`/bookServices/${id}`);
  };
  return (
    <div>
      <div className="card bg-base-100 w-11/12 text-black shadow-2xl hover:bg-red-100  hover:shadow-inner">
        <figure>
          <img
            className="w-full pic-style"
            src={trip?.img}
            alt=""
            style={{ height: "300px" }}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl">{trip?.name}</h2>
          <p>{trip?.location}</p>
          <h2 className="mt-2">
            Salary : <span className="font-bold">${trip?.price}</span> / Per Day
          </h2>
          <p>{trip?.description}</p>
        </div>
        <button onClick={() => handleBook(trip?._id)} className="btn font-bold">
          book now
        </button>
      </div>
    </div>
  );
};

export default TripsTravel;
