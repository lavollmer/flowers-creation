import React from "react";
import ShowcaseFlowers from "../assets/showcaseflowers.jpg";

const Hero = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Make Your Personalized Bouquet
              {/* <br class="hidden lg:inline-block">readymade gluten */}
            </h1>
            <p class="mb-8 leading-relaxed">
              Always having trouble trying to create flower arrangements on a
              budget? Want something easy to follow? We have the solution for
              you!
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-[#97594A] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Products
              </button>
              <button class="ml-4 inline-flex text-white bg-[#243853] border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Design
              </button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={ShowcaseFlowers}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
