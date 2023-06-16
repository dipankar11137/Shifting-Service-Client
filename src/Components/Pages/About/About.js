import React from "react";
import Footer from "../Share/Footer";

const About = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-8">
          <img
            className="w-24 md:w-32 lg:w-3/5 rounded-lg h-96"
            src="https://bdshiftingservice.com/wp-content/uploads/2021/10/House-Shifting-Service-Baridhara.jpg"
            alt=""
          />
          <div className="ms-32">
            <h1 className="text-5xl font-bold text-rose-800 ">About Us</h1>
            <p className="py-6">
              I am writing to introduce you to our sifting services. Our company
              specializes in providing high-quality sifting services to
              businesses and individuals looking to streamline their processes
              and improve efficiency. Our sifting services are designed to help
              you sift through large amounts of data or information quickly and
              accurately, allowing you to identify relevant information and make
              informed decisions. Whether you need to sort through financial
              records, customer data, or any other type of information, our team
              of experts can help. We use advanced tools and techniques to sift
              through your data quickly and efficiently, ensuring that you get
              the information you need in a timely manner. Our services are
              customizable, so we can tailor our approach to meet your specific
              needs and preferences. At our company, we are committed to
              providing exceptional customer service and delivering the highest
              quality results. We pride ourselves on our attention to detail,
              accuracy, and professionalism, and we work tirelessly to exceed
              our clients' expectations. If you are interested in learning more
              about our sifting services, please don't hesitate to contact us.
              We would be happy to discuss your needs and provide you with a
              customized solution that meets your specific requirements.
            </p>
            <button data-theme="autumn" className="btn btn-orange-500">
              See More
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
