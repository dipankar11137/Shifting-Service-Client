import React from "react";
import Footer from "../Share/Footer";
import AddVataice from "./AddVataice";
import Banner from "./Banner";
import ForYourHome from "./ForYourHome";
import OurServices from "./OurServices";
import Progress from "./Progress";
import RecentlyView from "./RecentlyView";
import Services from "./Services";
import SSP from "./SSP";
import Test from "./Test";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
  return (
    <div className="bg-white text-white">
      <div className="mx-7 pb-7 ">
        {" "}
        <Banner />{" "}
      </div>
      {/* <Services /> */}
      {/* <div className="grid grid-cols-2">
        <h1>Hello</h1>
        <div>
          {" "}
          <Test />
        </div>
      </div> */}

      <OurServices />
      <AddVataice />
      <ForYourHome />
      <RecentlyView />
      <WhyChooseUs />
      <Progress />
      <SSP />
      <Footer />
    </div>
  );
};

export default Home;
