import React from "react";
import { GiFlowerPot } from "react-icons/gi";
import Instagram from "./reusable/Instagram";

const Header = () => {
  // Header component styling taken from Tailblocks
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <GiFlowerPot
              size={40}
              className="bg-[#243853] rounded-lg text-white"
            />
            <span className="ml-3 text-xl">Blooming Creations</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">Products</a>
            <a className="mr-5 hover:text-gray-900">Design</a>
            <a className="mr-5 hover:text-gray-900">About Us</a>
            <a className="mr-5 hover:text-gray-900">FAQ</a>
            <a className="mr-5 hover:text-gray-900">Contact Us</a>
            <a className="mr-5 hover:text-gray-900">Blog</a>
          </nav>
          <Instagram />
        </div>
      </header>
    </div>
  );
};

export default Header;
