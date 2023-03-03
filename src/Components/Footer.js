import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="container mx-auto flex justify-between">
        <div className="flex items-center">
          <img
            src="https://images.thecompanycheck.com/companylogo/ALTIUS_HOSPITALS_PRIVATE_LIMITED.webp"
            alt="Hospital logo"
            className="h-8"
          />
          <span className="text-lg font-semibold ml-2">Altius Hospital</span>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer