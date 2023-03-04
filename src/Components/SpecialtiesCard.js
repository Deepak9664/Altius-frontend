import React from "react";

const SpecilitiesCard = ({
  Specialties
}) => {

  return (
    <div className="w-full max-w-sm bg-orange-300 hover:bg-orange-400 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2 flex-col items-center py-3">
      <div className="flex flex-col items-center">
         <img
          className="w-24 h-24 mb-3 rounded-full p-2 shadow-lg"
          src="https://images.thecompanycheck.com/companylogo/ALTIUS_HOSPITALS_PRIVATE_LIMITED.webp"
          alt="Doctor's Image"
        /> 
        <h2 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {Specialties}
        </h2>
        {/* <span className="flex text-sm text-gray-500 dark:text-gray-400 items-center justify-center">
          {specilisation[0]}
        </span> */}
        {/* <span className="flex text-sm text-gray-500 dark:text-gray-400 items-center justify-center">{Qualification}</span> */}
     {/* <span className="text-sm text-gray-500 dark:text-gray-400">{Designation}</span>  */}
        {/* <span className="inline-flex mt-5 items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Book Appointment
        </span> */}
      </div>
    </div>
  );
};

export default SpecilitiesCard;
