import React from "react";
import { Link } from "react-router-dom";

const RecentlyView = () => {
  return (
    <div className="mx-32">
      <h1 className="text-black py-6 font-semibold text-3xl">Recently View</h1>
      <Link to="/">
        <div className="card w-72 bg-base-100 text-black  mt-2 ">
          <figure>
            <img
              className="w-full bg-blue-500 pic-style rounded-xl"
              src="https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/thumbs/1595216678_houseshiftingservices.jpg"
              alt="ac"
              style={{ height: "200px", width: "400px" }}
            />
          </figure>
          <div className="pb-2 pt-2 px-3">
            <h2 className=" text-xl text-center font-semibold">
              Home Shifting Services
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RecentlyView;
