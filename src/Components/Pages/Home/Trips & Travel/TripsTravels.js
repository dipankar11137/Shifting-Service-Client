import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../../Share/Footer";
import TripsTravel from "./TripsTravel";

const TripsTravels = () => {
  const [trips, setTrips] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allServices/Trips And Travel")
      .then((res) => res.json())
      .then((data) => setTrips(data));
  }, []);
  return (
    <div className="bg-slate-200">
      <div className="mx-28 mb-10">
        <h1 className="py-4 font-bold text-4xl pl-4">Trips & Travels</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-3">
          {trips.map((trip) => (
            <TripsTravel key={trip._id} trip={trip}></TripsTravel>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TripsTravels;
