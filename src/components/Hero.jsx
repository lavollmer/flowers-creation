import React from "react";
import ShowcaseFlowers from "../assets/showcaseflowers.jpg";

const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Build-A-Bouquet
              {/* <br className="hidden lg:inline-block">readymade gluten */}
            </h1>
            <p className="mb-8 leading-relaxed">
              Always having trouble trying to create flower arrangements on a
              budget? Want something easy to follow? We have the solution for
              you!
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-[#97594A] border-0 py-2 px-6 focus:outline-none hover:bg-black rounded text-lg">
                Products
              </button>
              <button className="ml-4 inline-flex text-white bg-[#243853] border-0 py-2 px-6 focus:outline-none hover:bg-black rounded text-lg">
                Design
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="flower arrangement hero image"
              src={ShowcaseFlowers}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
