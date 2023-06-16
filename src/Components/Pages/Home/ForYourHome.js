import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const ForYourHome = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4,
    },
  };
  return (
    <div className="mx-28 pb-10 mt-16">
      <div className="bg-white pl-6 rounded-lg ">
        <h1 className="text-black text-3xl font-semibold py-3">
          For Your Home
        </h1>
        <Carousel className="" responsive={responsive}>
          <Link to="/">
            <div className="card w-72 bg-base-100 text-black  mt-2 ">
              <figure>
                <img
                  className="w-full bg-blue-500 pic-style rounded-xl"
                  src="https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/thumbs/1583777507_gasstove/burnerrepair_270x180.webp"
                  alt="ac"
                  style={{ height: "200px", width: "400px" }}
                />
              </figure>
              <div className="pb-2 pt-2 px-3">
                <h2 className=" text-xl font-semibold">
                  Gas Stove/Burner Repair
                </h2>
              </div>
            </div>
          </Link>
          <Link to="/">
            <div className="card w-72 bg-base-100 text-black  mt-2 ">
              <figure>
                <img
                  className="w-full bg-blue-500 pic-style rounded-xl"
                  src="https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/thumbs/1619428672_plumbingsanitaryservices_270x180.webp"
                  alt="ac"
                  style={{ height: "200px", width: "400px" }}
                />
              </figure>
              <div className="pb-2 pt-2 px-3">
                <h2 className=" text-xl font-semibold text-center">
                  Plumbing & Sanitary
                </h2>
              </div>
            </div>
          </Link>
          <Link to="/">
            <div className="card w-72 bg-base-100 text-black  mt-2 ">
              <figure>
                <img
                  className="w-full bg-blue-500 pic-style rounded-xl"
                  src="https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/thumbs/1612862065_paintingservices_270x180.webp"
                  alt="ac"
                  style={{ height: "200px", width: "400px" }}
                />
              </figure>
              <div className="pb-2 pt-2 px-3">
                <h2 className=" text-xl  font-semibold text-center">
                  Painting Services
                </h2>
              </div>
            </div>
          </Link>
          <Link to="/">
            <div className="card w-72 bg-base-100 text-black  mt-2 ">
              <figure>
                <img
                  className="w-full bg-blue-500 pic-style rounded-xl"
                  src="https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/thumbs/1617855940_homecleaning_270x180.webp"
                  alt="ac"
                  style={{ height: "200px", width: "400px" }}
                />
              </figure>
              <div className="pb-2 pt-2 px-3">
                <h2 className=" text-xl text-center font-semibold">
                  Home Cleaning
                </h2>
              </div>
            </div>
          </Link>
          <Link to="/">
            <div className="card w-72 bg-base-100 text-black  mt-2 ">
              <figure>
                <img
                  className="w-full bg-blue-500 pic-style rounded-xl"
                  src="https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/thumbs/1675662748_pestcontrolservice_270x180.webp"
                  alt="ac"
                  style={{ height: "200px", width: "400px" }}
                />
              </figure>
              <div className="pb-2 pt-2 px-3">
                <h2 className=" text-xl text-center font-semibold">
                  Pest Control Services
                </h2>
              </div>
            </div>
          </Link>
          <Link to="/">
            <div className="card w-72 bg-base-100 text-black  mt-2 ">
              <figure>
                <img
                  className="w-full bg-blue-500 pic-style rounded-xl"
                  src="https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/thumbs/1595216678_houseshiftingservices_270x180.webp"
                  alt="ac"
                  style={{ height: "200px", width: "400px" }}
                />
              </figure>
              <div className="pb-2 pt-2 px-3">
                <h2 className=" text-xl text-center font-semibold">
                  House Shifting Services
                </h2>
              </div>
            </div>
          </Link>
        </Carousel>
      </div>
    </div>
  );
};

export default ForYourHome;
