import React, { useState } from 'react';
import "./App.css";

const Nav = () => {
 
  

  const [activeTab, setActiveTab] = useState('Home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <nav className="fixed top-0 z-20 bg-green-50 w-full " style={{scrollBehavior:"smooth",height:"60px",boxShadow:"0px 1px 6px black"}}>
       
      <ul className="flex md:space-y-0 p-2 md:flex-row md:space-x-8 font hover:cursor-pointer items-center justify-center">
        {/* List items */}
        
        <li
  className={` p-2 ${
    activeTab === 'Home' ? 'text-black border-b-2 border-black font-semibold ' : 'hover:border-b-2 border-transparent hover:text-black hover:border-slate-600 transition-colors duration-100 ease-in-out'
  }`}
  onClick={() => handleTabClick('Home')}
><a href='#home'>
   
  HOME
</a>

          
        </li>
      
            
        <li
          className={`  p-2 ${
            activeTab === 'About' ? 'text-black border-b-2 border-black font-semibold' : 'hover:border-b-2 border-transparent hover:text-black hover:border-slate-600 transition-colors duration-100 ease-in-out'
          }`} 
          onClick={() => handleTabClick('About')}
        ><a href='#about' >
          ABOUT</a>
        </li>
        
        <li
          className={` p-2 ${
            activeTab === 'Contact' ? 'text-black border-b-2 border-black font-semibold' : 'hover:border-b-2 border-transparent hover:text-black hover:border-slate-600 transition-colors duration-100 ease-in-out'
          }`}
          onClick={() => handleTabClick('Contact')}
        ><a href='#contact'>
          CONTACT
          </a>
        </li>
      </ul>
      
    </nav>
  );
};

export default Nav;
