import React,{ useEffect, useState } from 'react'

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
    <div>
      
    </div>
  )
}

export default Specilities
