import React from 'react';

const ManageOrder = ({ order, index }) => {
  console.log(order);
  return (
    <tr>
      <th>{index}</th>

      <td>{order?.name}</td>
      <td>{order?.service}</td>
      <td>{order?.description}</td>
      <td>{order?.customerName}</td>
      <td>{order?.phone}</td>
      <td>{order?.address}</td>
      <td>{order?.date}</td>
      <td>{order?.price}</td>
      <td>
        <button className="btn btn-accent btn-xs">Accept</button>
      </td>
      <td>
        <button className="btn btn-xs">Remove</button>
      </td>
    </tr>
  );
};

export default ManageOrder;
