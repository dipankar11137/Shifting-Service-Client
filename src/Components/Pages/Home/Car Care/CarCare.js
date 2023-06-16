import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "../../Share/Footer";
import Shifting from "../Shifting/Shifting";

const CarCare = () => {
  const [shiftings, setShifting] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allServices/Car Care")
      .then((res) => res.json())
      .then((data) => setShifting(data));
  }, []);
  return (
    <div className="bg-slate-200">
      <div className="mx-28 mb-10">
        <h1 className="py-4 font-bold text-4xl pl-4">Car Care</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-3">
          {shiftings.map((shifting) => (
            <Shifting key={shifting._id} shifting={shifting}></Shifting>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CarCare;
