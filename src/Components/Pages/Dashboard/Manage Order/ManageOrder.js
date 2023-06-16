import React from 'react';

const ManageOrder = ({ order, index, handleDelete, handleAccept }) => {
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
        <button
          onClick={() => handleAccept(order?._id)}
          className="btn btn-secondary btn-xs text-white font-semibold"
        >
          Accept
        </button>
      </td>
      <td>
        <button onClick={() => handleDelete(order?._id)} className="btn btn-xs">
          Remove
        </button>
      </td>
    </tr>
  );
};

export default ManageOrder;
