import React, { useEffect, useState } from "react";
import Footer from "../../Share/Footer";
import AcRepairService from "./AcRepairService";

const AcRepairServices = () => {
  const [acRepairs, setAcRepair] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allServices/Ac Repair Services")
      .then((res) => res.json())
      .then((data) => setAcRepair(data));
  }, []);
  return (
    <div className="bg-slate-200">
      <div className="mx-28 mb-10">
        <h1 className="py-4 font-bold text-4xl pl-4">AC Technician</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-3">
          {acRepairs.map((acRepair) => (
            <AcRepairService
              key={acRepair._id}
              acRepair={acRepair}
            ></AcRepairService>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AcRepairServices;
