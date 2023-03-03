 import React from 'react'






const Title =()=>(
    <a href="./">
    <img className="h-28 px-2 rounded-[12px]" alt="logo" src="https://images.thecompanycheck.com/companylogo/ALTIUS_HOSPITALS_PRIVATE_LIMITED.webp"
    />
    </a>
  );
const Header = () => {
  return (
    <div className="flex bg-blue-100 shadow-lg py-4">
        <Title></Title>
        <div className="nav-items">
      <ul className="flex py-10">
        <li className='px-2'>Find a doctor</li>
        <li className='px-2'>Specialist</li>
        <li className='px-2'>Treatment</li>
        <li className='px-2'>Contact us</li>
        <li className='px-2'>About Usr</li>
        <li className='px-2'>Find a doctor</li>
      </ul>
      </div>
    </div>
  )
}

 export default Header
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
