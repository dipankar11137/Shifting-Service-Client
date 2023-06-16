import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const MonthlyReports = () => {
  const [reports, setReports] = useState([]);
  const [acs, setAc] = useState([]);
  const [appliances, setAppliances] = useState([]);
  const [trips, setTrips] = useState([]);
  const [shiftings, setShiftings] = useState([]);
  const [car, setCar] = useState([]);
  const [beauties, setBeauties] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/bookAppliances")
      .then((res) => res.json())
      .then((data) => setReports(data));
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/bookAppliances/AC Repair Services")
      .then((res) => res.json())
      .then((data) => setAc(data));
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/bookAppliances/Appliance Repair")
      .then((res) => res.json())
      .then((data) => setAppliances(data));
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/bookAppliances/Trips And Travel")
      .then((res) => res.json())
      .then((data) => setTrips(data));
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/bookAppliances/Shifting")
      .then((res) => res.json())
      .then((data) => setShiftings(data));
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/bookAppliances/Car Care")
      .then((res) => res.json())
      .then((data) => setCar(data));
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/bookAppliances/Beauty & Salon")
      .then((res) => res.json())
      .then((data) => setBeauties(data));
  }, []);
  return (
    <div className="flex justify-center mt-6">
      <div className="w-8/12  bg-white">
        <div className="p-5">
          <h1 className="text-3xl font-bold mb-10 underline uppercase text-orange-900">
            Monthly Report
          </h1>
          <h1 className="p-1 text-xl text-blue-900 font-bold">
            Total Services : {reports.length}
          </h1>
          <h1 className="p-1 text-xl text-blue-900 font-semibold">
            Ac Repair Services : {acs.length}
          </h1>
          <h1 className="p-1 text-xl text-blue-900 font-semibold">
            Appliance Repair Services : {appliances.length}
          </h1>
          <h1 className="p-1 text-xl text-blue-900 font-semibold">
            Trips And Travel : {trips.length}
          </h1>
          <h1 className="p-1 text-xl text-blue-900 font-semibold">
            Shifting Services : {shiftings.length}
          </h1>
          <h1 className="p-1 text-xl text-blue-900 font-semibold">
            Car Cars : {car.length}
          </h1>
          <h1 className="p-1 text-xl text-blue-900 font-semibold">
            Beauty & Salon : {beauties.length}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default MonthlyReports;
