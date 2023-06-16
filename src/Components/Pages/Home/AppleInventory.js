import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const AppleInventory = () => {
  const { id } = useParams();
  const [appleProduct, setAppleProduct] = useState({});
  const [update, setUpdate] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/appleProducts/${id}`)
      .then((res) => res.json())
      .then((data) => setAppleProduct(data));
  }, [update]);

  // delivery
  const handleDeliverd = () => {
    if (appleProduct?.quantity > 0) {
      const newQuantity = parseInt(appleProduct.quantity) - 1;
      const updateQuantity = { quantity: newQuantity };

      fetch(`http://localhost:5000/appleProducts/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateQuantity),
      })
        .then((res) => res.json())
        .then((data) => {
          setUpdate(data);
          toast.success("Product Delivery Successful");
        });
    } else {
      toast.error("Sold Out");
    }
  };

  // Restock
  const handleRestock = (event) => {
    event.preventDefault();
    const addQuentity = event.target.quantity.value;
    if (addQuentity <= 0) {
      toast.error("Enter a Positive Value");
    } else {
      const newQuantity =
        parseInt(event.target.quantity.value) + parseInt(appleProduct.quantity);
      console.log(newQuantity);
      const updateQuantity = { quantity: newQuantity };
      fetch(`http://localhost:5000/appleProducts/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateQuantity),
      })
        .then((res) => res.json())
        .then((data) => {
          setUpdate(data);
          toast.success("Restock Is Successfully");
          event.target.reset();
        });
    }
  };

  return (
    <div className="w-full flex justify-center pt-2 pb-32 bg-slate-300">
      <div className="bg-zinc-300 w-2/3 rounded-3xl shadow-inner">
        <div className="flex justify-center appleProducts-center">
          <div className="card bg-base-100 shadow-xl">
            <div>
              <figure>
                <img
                  className="h-56 rounded-xl pt-2 pic-style"
                  src={appleProduct.img}
                  alt="Shoes"
                />
              </figure>
            </div>
            <div className="card-body">
              <div>
                <h2 className="card-title">
                  {appleProduct.name}
                  <div className="badge badge-orange-600">
                    {appleProduct.status}
                  </div>
                </h2>
                <p>{appleProduct.description}</p>
                <p>appleProduct Id No: {appleProduct._id} </p>
                <p>Price : {appleProduct.price} $</p>
                <p>Quantity : {appleProduct.quantity}</p>
                <p>Supplier Name : {appleProduct.supplierName}</p>
              </div>
              <div className="card-actions justify-end">
                <div>
                  <div
                    onClick={() => handleDeliverd()}
                    className="badge p-5 btn-orange-600 text-white cursor-pointer font-bold hover:bg-orange-800"
                  >
                    Delivered
                  </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                  <div className="card-body appleProducts-center text-center">
                    <form onSubmit={handleRestock}>
                      <input
                        type="number"
                        name="quantity"
                        id=""
                        placeholder="Enter a Number"
                        className="input input-bordered input-error hover:border-lime-500"
                      />

                      <input
                        type="submit"
                        className=" ml-3 btn mt-2 btn-orange-500 text-white  font-bold rounded-lg"
                        value="Restock"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppleInventory;
