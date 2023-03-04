import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";

const Header = () => {
  return (
    <div className="flex bg-blue-100 shadow-lg py-4 justify-around px-16 items-center">
      <a href="./">
        <img
          className="h-20 px-2 rounded-[12px]"
          alt="logo"
          src="https://images.thecompanycheck.com/companylogo/ALTIUS_HOSPITALS_PRIVATE_LIMITED.webp"
        />
      </a>
      <div className="flex justify-around min-w-[70%] items-center">
        <span>Find a doctor</span>
        <span>Specialist</span>
        <span>Treatment</span>
     <Link to='/contact' >  <span>Contact us</span> </Link>
        <span>About Us</span>
        <span>Find a doctor</span>
        <span className="bg-orange-300 py-1 px-3 rounded-sm">Contact Us</span>
        <span className="bg-orange-300 py-1 px-3 rounded-sm">
          Call Phone No.
        </span>
      </div>
    </div>
  );
};

export default Header;

 
// import React from "react";
// import { Link } from "react-router-dom";

// function Header() {
//   return (
    
//     <div className="bg-gray-100 shadow-lg">
//       <nav className="container mx-auto flex justify-between items-center py-4">
//         <Link to="/" className="text-lg font-bold">
//           <span className="text-blue-600">Doctor</span>Finder
//         </Link>
//         <div className="flex items-center">
//           <Link
//             to="/find-doctor"
//             className="px-4 py-2 text-gray-800 font-semibold hover:bg-gray-200 rounded-lg mr-4"
//           >
//             Find a Doctor
//           </Link>
//           <Link
//             to="/specialists"
//             className="px-4 py-2 text-gray-800 font-semibold hover:bg-gray-200 rounded-lg mr-4"
//           >
//             Specialist
//           </Link>
//           <Link
//             to="/treatments"
//             className="px-4 py-2 text-gray-800 font-semibold hover:bg-gray-200 rounded-lg mr-4"
//           >
//             Treatment
//           </Link>
//           <Link
//             to="/contact-us"
//             className="px-4 py-2 text-gray-800 font-semibold hover:bg-gray-200 rounded-lg mr-4"
//           >
//             Contact Us
//           </Link>
//           <Link
//             to="/about"
//             className="px-4 py-2 text-gray-800 font-semibold hover:bg-gray-200 rounded-lg"
//           >
//             About
//           </Link>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Header;
