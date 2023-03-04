import React,{ useEffect, useState } from 'react'
import SpecilitiesCard from './SpecialtiesCard';

const Specilities = () => {
    const [Specilities,Setspecilities] = useState([]);
    useEffect(() => {
        getspecilities();
      }, []);
      async function  getspecilities() {
        const data = await fetch("http://localhost:5000/specilities");
        const json = await data.json();
        //optional chaining
        console.log("json",json)
        Setspecilities(json.msg);
      }



  return (
    <div className="bg-gray-200">
       <div className="col-span-10 text-center p-8">
        
       
     
      <div className="flex flex-wrap bg-gray-200 justify-around px-20">
        {Specilities.map((Specilities) => {
          return <SpecilitiesCard {...Specilities} />;
        })}
      </div>
      </div>
    </div>
  );
};
  


export default Specilities
