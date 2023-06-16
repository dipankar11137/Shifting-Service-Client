import React, { useEffect, useState } from 'react';
import ManageOrder from './ManageOrder';

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/bookAppliances')
      .then(res => res.json())
      .then(data => setOrders(data));
  }, [orders]);
  return (
    <div>
      <div className="overflow-x-auto ml-28">
        <table className="table">
          <thead>
            <tr>
              <th className="text-xl"></th>
              <th className="text-xl">Name</th>
              <th className="text-xl">Service</th>
              <th className="text-xl">Problem</th>
              <th className="text-xl">Customer Name</th>
              <th className="text-xl">Phone</th>
              <th className="text-xl">Address</th>
              <th className="text-xl">Date</th>
              <th className="text-xl">Price</th>
              <th className="text-xl">Accept</th>
              <th className="text-xl">Remove</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <ManageOrder
                key={order?._id}
                order={order}
                index={index + 1}
              ></ManageOrder>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
