import React from 'react'






const Title =()=>(
    <a href="./">
    <img className="h-28 px-2 rounded-[12px]" alt="logo" src="https://images.thecompanycheck.com/companylogo/ALTIUS_HOSPITALS_PRIVATE_LIMITED.webp"
    />
    </a>
  );
const Header = () => {
  return (
    <div className="flex bg-blue-100 shadow-lg">
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
