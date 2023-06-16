import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const AddItem = () => {
  const [user] = useAuthState(auth);
  const [service, setService] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    const changeUrl = { ...data, service: service };
    // console.log(changeUrl);
    const url = `http://localhost:5000/allServices`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(changeUrl),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("Successfully Add This Products");
        reset();
      });
  };
  return (
    <div className=" pb-20">
      <h2 className="mt-5 ml-10 font-bold text-4xl text-center text-orange-500 uppercase">
        Please Add A Product
      </h2>
      <div className="bg-indigo-200 p-5 rounded-2xl w-11/12 mt-5 ml-5 ">
        <form
          className=" flex justify-center gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mt-48 pr-20 ">
            <select
              onChange={(e) => setService(e.target.value)}
              className="select select-primary w-96 max-w-xs"
            >
              <option disabled selected>
                Select Your Services
              </option>
              <option>Ac Repair Services</option>
              <option>Appliance Repair</option>
              <option>Trips And Travel</option>
              <option>Shifting</option>
              <option>Car Care</option>
              <option>Beauty & Salon</option>
            </select>
          </div>
          <div>
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Service name"
              className="input input-bordered bg-white lg:w-96 sm:w-full max-w-xs hover:shadow-xl shadow-inner"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is Required",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors?.name?.message}
                </span>
              )}
            </label>
            <label className="label">
              <span className="label-text">Images</span>
            </label>
            <input
              type="text"
              placeholder="Images URL"
              className="input input-bordered bg-white w-full max-w-xs hover:shadow-xl shadow-inner"
              {...register("img", {
                required: {
                  value: true,
                  message: "Images is Required",
                },
              })}
            />

            <label className="label">
              {errors.img?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors?.img?.message}
                </span>
              )}
            </label>

            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              placeholder="Services Location"
              className="input input-bordered bg-white w-full max-w-xs  hover:shadow-xl shadow-inner"
              {...register("location", {
                required: {
                  value: true,
                  message: "Location is Required",
                },
              })}
            />
            <label className="label">
              {errors.location?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors?.location?.message}
                </span>
              )}
            </label>
            {/* Price */}
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              placeholder="Price"
              className="input input-bordered bg-white w-full max-w-xs  hover:shadow-xl shadow-inner"
              {...register("price", {
                required: {
                  value: true,
                  message: "Price is Required",
                },
              })}
            />
            <label className="label">
              {errors.price?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors?.price?.message}
                </span>
              )}
            </label>
            {service ? (
              <input
                className="btn mt-5 w-full disable text-white"
                type="submit"
                value="ADD"
              />
            ) : (
              <input
                className="btn mt-5 w-full text-white"
                disabled
                type="submit"
                value="ADD"
              />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
