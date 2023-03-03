import React from "react";

 const DoctorCard = ({name,Qualification,age,specilisation,Designation
 }) => {
   return (
     <div className="w-56 p-2 m-2 shadow-lg bg-lime-300">
       <img
          src={
            "https://images.thecompanycheck.com/companylogo/ALTIUS_HOSPITALS_PRIVATE_LIMITED.webp" 
            
          }
        />
      <h2 className="font-bold text-xs">{name}</h2>
      <h2 className="font-bold text-xs">{specilisation.join(",")}</h2>
      <h3 className="text-xs">{Qualification}</h3>
      <h4>{age}</h4>
      <h5 className="text-xs">{Designation}</h5>
      
     </div>
   )
 }
 
 export default DoctorCard
 