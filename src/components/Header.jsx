import React from "react";
import { GiFlowerPot } from "react-icons/gi";
import Instagram from "./reusable/Instagram";
import { Link } from "react-router-dom";

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
          <nav className="md:ml-auto md:mr-auto flex flex-row flex-wrap items-center text-base justify-center">
            <ul>
            <li className="mr-5 hover:text-gray-900"><Link to ="/Home">Home</Link></li>
            <li className="mr-5 hover:text-gray-900"><Link to ="/Products">Products</Link></li>
            <li className="mr-5 hover:text-gray-900"><Link to ="/Design">Design</Link></li>
            <li className="mr-5 hover:text-gray-900"><Link to ="/AboutUs">About Us</Link></li>
            <li className="mr-5 hover:text-gray-900"><Link to ="/ContactUs">Contact Us</Link></li>
            <li className="mr-5 hover:text-gray-900"><Link to ="/Blog">Blog</Link></li>
            <li className="mr-5 hover:text-gray-900"><Link to ="/Knowledge">Knowledge</Link></li>
            </ul>
          </nav>
          <Instagram />
        </div>
      </header>
    </div>
  );
};

export default Header;
