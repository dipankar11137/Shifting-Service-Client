import React, { useEffect, useState } from 'react';

const MonthlyReports = () => {
  const [reports, setReports] = useState([]);
  const [acs, setAc] = useState([]);
  const [appliances, setAppliances] = useState([]);
  const [trips, setTrips] = useState([]);
  const [shiftings, setShiftings] = useState([]);
  const [car, setCar] = useState([]);
  const [beauties, setBeauties] = useState([]);
  // next part
  const [reports1, setReports1] = useState([]);
  const [acs1, setAc1] = useState([]);
  const [appliances1, setAppliances1] = useState([]);
  const [trips1, setTrips1] = useState([]);
  const [shiftings1, setShiftings1] = useState([]);
  const [car1, setCar1] = useState([]);
  const [beauties1, setBeauties1] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/bookAppliances')
      .then(res => res.json())
      .then(data => setReports(data));
  }, [reports]);
  useEffect(() => {
    fetch('http://localhost:5000/bookAppliances/Ac Repair Services')
      .then(res => res.json())
      .then(data => setAc(data));
  }, [reports]);
  useEffect(() => {
    fetch('http://localhost:5000/bookAppliances/Appliance Repair')
      .then(res => res.json())
      .then(data => setAppliances(data));
  }, [reports]);
  useEffect(() => {
    fetch('http://localhost:5000/bookAppliances/Trips And Travel')
      .then(res => res.json())
      .then(data => setTrips(data));
  }, [reports]);
  useEffect(() => {
    fetch('http://localhost:5000/bookAppliances/Shifting')
      .then(res => res.json())
      .then(data => setShiftings(data));
  }, [reports]);
  useEffect(() => {
    fetch('http://localhost:5000/bookAppliances/Car Care')
      .then(res => res.json())
      .then(data => setCar(data));
  }, [reports]);
  useEffect(() => {
    fetch('http://localhost:5000/bookAppliances/Beauty & Salon')
      .then(res => res.json())
      .then(data => setBeauties(data));
  }, [reports]);

  // next part
  useEffect(() => {
    fetch('http://localhost:5000/bookDoneAppliances')
      .then(res => res.json())
      .then(data => setReports1(data));
  }, [reports1]);
  useEffect(() => {
    fetch('http://localhost:5000/bookDoneAppliance/Ac Repair Services')
      .then(res => res.json())
      .then(data => setAc1(data));
  }, [reports1]);
  useEffect(() => {
    fetch('http://localhost:5000/bookDoneAppliance/Appliance Repair')
      .then(res => res.json())
      .then(data => setAppliances1(data));
  }, [reports1]);
  useEffect(() => {
    fetch('http://localhost:5000/bookDoneAppliance/Trips And Travel')
      .then(res => res.json())
      .then(data => setTrips1(data));
  }, [reports1]);
  useEffect(() => {
    fetch('http://localhost:5000/bookDoneAppliance/Shifting')
      .then(res => res.json())
      .then(data => setShiftings1(data));
  }, [reports1]);
  useEffect(() => {
    fetch('http://localhost:5000/bookDoneAppliance/Car Care')
      .then(res => res.json())
      .then(data => setCar1(data));
  }, [reports1]);
  useEffect(() => {
    fetch('http://localhost:5000/bookDoneAppliance/Beauty & Salon')
      .then(res => res.json())
      .then(data => setBeauties1(data));
  }, [reports1]);
  return (
    <div className="flex justify-center mt-6">
      <div className="w-8/12  bg-white">
        <div className="p-5 ml-40">
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
      <div className="w-8/12  bg-white">
        <div className="p-5">
          <h1 className="text-3xl font-bold mb-10 underline uppercase text-orange-900">
            Monthly Report
          </h1>
          <h1 className="p-1 text-xl text-blue-900 font-bold">
            Total Services : {reports1.length}
          </h1>
          <h1 className="p-1 text-xl text-blue-900 font-semibold">
            Ac Repair Services : {acs1.length}
          </h1>
          <h1 className="p-1 text-xl text-blue-900 font-semibold">
            Appliance Repair Services : {appliances1.length}
          </h1>
          <h1 className="p-1 text-xl text-blue-900 font-semibold">
            Trips And Travel : {trips1.length}
          </h1>
          <h1 className="p-1 text-xl text-blue-900 font-semibold">
            Shifting Services : {shiftings1.length}
          </h1>
          <h1 className="p-1 text-xl text-blue-900 font-semibold">
            Car Cars : {car1.length}
          </h1>
          <h1 className="p-1 text-xl text-blue-900 font-semibold">
            Beauty & Salon : {beauties1.length}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default MonthlyReports;
