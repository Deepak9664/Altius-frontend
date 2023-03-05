import React, { useEffect, useState } from "react";
import DoctorCard from "./DoctorCard";
import ContactForm from "./ContactForm";
import Specilities from "./Specilities";
import Form from "./Form";
import { Link } from "react-router-dom";

// function filterData(inputTxt, Doctors) {
//   const filterData = Doctors.filter((Doc) =>
//     Doc?.name?.toLowerCase()?.includes(inputTxt.toLowerCase())
//   );
//   return filterData;
// }

const Body = () => {
  const [doctor, setDoctor] = useState([]);
  const [filteredDoctor, setfilteredDoctor] = useState([]);
  const [inputTxt, setInputTxt] = useState("");

  useEffect(() => {
    getdoctors();
  }, []);
  async function getdoctors() {
    const data = await fetch("http://localhost:5000/Doctor");
    const json = await data.json();
    //optional chaining
    // console.log("json",json)
    setDoctor(json.msg);
  }

  const filterDoctors = (txt) => {
    setfilteredDoctor(txt &&
      doctor.filter((item) => item.name.toLowerCase().startsWith(txt))
    );
    console.log(filteredDoctor)
  };
  return (
    <div className="bg-gray-200 flex-col justify-around">
       <div className="col-span-10 text-center p-8">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full px-6"
          type="text"
          placeholder="search"
          value={inputTxt}
          onChange={(e) => {
            setInputTxt(e.target.value);
          }}
        />
        <button
          className="border border-gray-400 p-2 rounded-r-full bg-slate-100"
          onClick={(e) => {
            filterDoctors(inputTxt);
            setInputTxt("")
          }}
        >
          search
        </button>
      </div>
      {filteredDoctor.length
        ? filteredDoctor.map((doc) => <h1>{doc.name}</h1>)
        : ""} 
      <div className="flex flex-wrap bg-gray-200 justify-around px-20  align-center">
        {doctor.map((doctors) => {
          return (
          <Link to="/appointment"> <DoctorCard {...doctors} />; </Link>
        )})}
      </div>
      
      {/* <h2 className="text-3xl font-bold text-gray-800">Heading Speculation</h2> */}
        <Specilities/>
        <ContactForm />
        
      
    </div>
  );
};
export default Body