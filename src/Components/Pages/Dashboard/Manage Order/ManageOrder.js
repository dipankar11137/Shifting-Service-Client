import React from 'react';

const ManageOrder = ({ order, index }) => {
  return (
    <tr>
      <th>{index}</th>
      <td>Cy Ganderton</td>
      <td>Quality Control Specialist</td>
      <td>Blue</td>
    </tr>
  );
};

export default ManageOrder;
