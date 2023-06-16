import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../../Share/Footer";
import ApplianceRepair from "./ApplianceRepair";

const ApplianceRepairs = () => {
  const [appliances, setAppliance] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allServices/Appliance Repair")
      .then((res) => res.json())
      .then((data) => setAppliance(data));
  }, []);
  return (
    <div className="bg-slate-200">
      <div className="mx-28 mb-10">
        <h1 className="py-4 font-bold text-4xl pl-4">Appliance Repair</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-3">
          {appliances.map((appliance) => (
            <ApplianceRepair
              key={appliance._id}
              appliance={appliance}
            ></ApplianceRepair>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ApplianceRepairs;
