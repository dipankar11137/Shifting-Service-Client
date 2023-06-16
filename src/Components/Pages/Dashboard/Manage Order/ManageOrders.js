import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import ManageOrder from './ManageOrder';

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [booking, setBooking] = useState({});
  const [iId, setIId] = useState('');
  useEffect(() => {
    fetch('http://localhost:5000/bookAppliances')
      .then(res => res.json())
      .then(data => setOrders(data));
  }, [orders]);
  // useEffect(() => {
  //   fetch(`http://localhost:5000/bookAppliancesId/${iId}`)
  //     .then(res => res.json())
  //     .then(data => setBooking(data));
  // }, [iId]);

  // const updateAcceptProduct = (id) => {

  //   const updateBooking = {
  //     ...booking,
  //   };
  //   console.log(updateBooking);
  //   const url = `http://localhost:5000/bookServiceDone`;
  //   fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       'content-type': 'application/json',
  //     },
  //     body: JSON.stringify(updateBooking),
  //   })
  //     .then(res => res.json())
  //     .then(result => {
  //       toast.success('Done');
  //     });
  // };
  const updateAcceptProduct = id => {
    fetch(`http://localhost:5000/bookAppliancesId/${id}`)
      .then(res => res.json())
      .then(data => {
        const updateBooking = {
          ...data,
        };
        console.log(updateBooking);
        const url = `http://localhost:5000/bookServiceDone`;
        fetch(url, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(updateBooking),
        })
          .then(res => res.json())
          .then(result => {
            toast.success('Done');
          });
      });
  };
  const handleAccept = id => {
    setIId(id);
    const updateAccept = { accept: true };
    fetch(`http://localhost:5000/bookAppliancesService/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updateAccept),
    })
      .then(res => res.json())
      .then(data => {
        updateAcceptProduct(id);
      });
  };
  const handleDelete = id => {
    const proceed = window.confirm('Are You Sure ?');
    if (proceed) {
      const url = `http://localhost:5000/bookAppliances/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(data => {
          const remaining = orders.filter(product => product._id !== id);
          setOrders(remaining);
          toast.success('Successfully Remove');
        });
    }
  };
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
                handleAccept={handleAccept}
                handleDelete={handleDelete}
              ></ManageOrder>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
