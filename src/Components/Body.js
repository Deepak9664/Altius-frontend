import React, { useEffect, useState } from 'react'
import DoctorCard from './DoctorCard'
import ContactForm from './ContactForm';



function filterData(searchinpuTxt,Doctors){
    const filterData= Doctors.filter((Doc)=>
         Doc?.name?.toLowerCase()?.includes(searchinpuTxt.toLowerCase()))
         return filterData;
   }


const Body = () => {
    const[doctor,setDoctor]=useState([])
    const [filterDoctor, setfilteredDoctor] = useState([]);
     const[searchinpuTxt,setSearchtInput]=useState("")

useEffect(()=>{
    getdoctors()
},[])
async function getdoctors(){
    const data =  await fetch("http://localhost:3001/Doctor")
    const json = await data.json();
    console.log(json.msg ,"dataaaa")
    //optional chaining
    setDoctor(json.msg)
    setfilteredDoctor(json.msg)
  }


  return (
    <div>
   <h1>Body</h1>
   <div className="col-span-10 text-center">
         <input className="w-1/2 border border-gray-400 p-2 rounded-l-full" type="text" placeholder="search" value={searchinpuTxt} onChange={(e)=>{
           setSearchtInput(e.target.value)}}/>
         <button className="border border-gray-400 p-2 rounded-r-full bg-slate-100" onClick={(e)=>{
            const data = filterData(searchinpuTxt,doctor)
            setfilteredDoctor(data)
         }}>search</button> 
         </div>
   <div className="flex flex-wrap bg-gray-200">
       {doctor.map((doctors)=>{
         return (<DoctorCard {...doctors} />
         )
       })}
    </div >
    <div >
    <ContactForm/>
    </div>
    
    </div>
  )
}

export default Body
