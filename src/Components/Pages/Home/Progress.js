import React from "react";

const Progress = () => {
  return (
    <div className="flex justify-center mb-10 bg-slate-100 mt-1">
      <div className="stats bg-slate-100">
        <div className="stat px-20">
          <div className="stat-title">Service Providers</div>
          <div className="stat-value text-primary">25.6K + </div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat px-20">
          <div className="stat-title">Order Served</div>
          <div className="stat-value text-secondary">2.6M +</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat px-20">
          <div className="stat-value">86000000 +</div>
          <div className="stat-title">5 Star Received</div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
