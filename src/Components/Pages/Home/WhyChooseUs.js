import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="px-32 pb-10 text-black bg-slate-50 mt-5">
      <h1 className="text-xl pt-2">--- WHY CHOOSE US</h1>
      <h1 className="text-5xl font-semibold pb-7">
        Because we care about your safety...
      </h1>
      <div className="grid grid-cols-2 ">
        <div className="grid grid-cols-2 gap-x-16  p-4 gap-y-3">
          <div className="bg-white flex rounded-xl h-28">
            <img
              className="w-20 h-20 p-2 ml-6 mt-2"
              src="https://cdn-marketplacexyz.s3.ap-south-1.amazonaws.com/sheba_xyz/images/png/usp_mask.png"
              alt=""
            />
            <h1 className="mt-4 font-semibold text-xl ml-4">
              Ensuring <br /> Masks
            </h1>
          </div>
          <div className="bg-white flex rounded-xl h-28">
            <img
              className="w-20 h-20 p-2 ml-6 mt-2"
              src="https://cdn-marketplacexyz.s3.ap-south-1.amazonaws.com/sheba_xyz/images/png/usp_24_7.png"
              alt=""
            />
            <h1 className="mt-4 font-semibold text-xl ml-4">
              24/7
              <br />
              Support
            </h1>
          </div>
          <div className="bg-white flex rounded-xl h-28">
            <img
              className="w-20 h-20 p-2 ml-6 mt-2"
              src="https://cdn-marketplacexyz.s3.ap-south-1.amazonaws.com/sheba_xyz/images/png/usp_sanitized.png"
              alt=""
            />
            <h1 className="mt-2 font-semibold text-xl ml-4">
              Sanitising
              <br /> Hands & Equipment
            </h1>
          </div>
          <div className="bg-white flex rounded-xl h-28">
            <img
              className="w-20 h-20 p-2 ml-6 mt-2"
              src="https://cdn-marketplacexyz.s3.ap-south-1.amazonaws.com/sheba_xyz/images/png/usp_gloves.png"
              alt=""
            />
            <h1 className="mt-4 font-semibold text-xl ml-4">
              Ensuring <br />
              Gloves
            </h1>
          </div>
        </div>
        <div>
          <img
            src="https://s3.ap-south-1.amazonaws.com/cdn-marketplacexyz/sheba_xyz/images/webp/why-choose-us.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
