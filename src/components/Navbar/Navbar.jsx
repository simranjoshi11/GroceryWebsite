import React, { useEffect, useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { TbMenu2,TbMenu3 } from "react-icons/tb";
import { Link } from 'react-router-dom';



const Navbar = () => {
  const[showMenu,setShowMenu] = useState(false);
  const [isScrolled,setIsScrolled] = useState(false);
  
  const toggleMenu = ()=>{
    setShowMenu(!showMenu);
  }
  useEffect(()=>{
    const handelScroll =()=>{
      setIsScrolled(window.screenY>10)
    }
    window.addEventListener('scroll',handelScroll);
    return()=> window.removeEventListener('scroll',handelScroll)
  },[])
  return (
    <header className={`bg-white fixed top-0 right-0 left-0 z-50  ${isScrolled?'drop-shadow-[0_4px_25px_rgba(0,0,0,0.1)]':""} `}>
      <nav className='max-w-[1400px] px-10 mx-auto md:h-[14vh] h-[12vh] items-center flex justify-between'>
        {/*logo*/}
       <Link to="#" className='text-3xl font-bold'>Fresh <span className='text-orange-500 uppercase'>G</span>O</Link> 
        
        {/*Desktop Menu */}
       <ul className='md:flex items-center gap-x-15 hidden '>
        <li>
          <a href="#"className='font-semibold  tracking-wider  text-orange-500'>Home</a>
        </li>
         <li>
          <a href="#"className='font-semibold tracking-wider  text-zinc-800 hover:text-orange-500 '>AboutUs</a>
        </li>
         <li>
          <a href="#"className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500 '>Process</a>
        </li>
         <li>
          <a href="#"className='font-semibold tracking-wider text-zinc-800  hover:text-orange-500'>ContactUs</a>
        </li>
       </ul>
       {/* input field */}
        <div className='md:flex  p-1 border-2 border-orange-500 rounded-full hidden'>
          <input type="text" name='text' id='text' placeholder='Search...'  autoComplete='off' className='flex-1 h-[5vh] px-3 focus:outline-none'/>
          <button className='bg-gradient-to-b from-orange-400 to-orange-500 text-white h-10 w-10 flex justify-center items-center rounded-full text-xl'>
            <IoSearch />
          </button>
        </div>
       {/* {nav action} */}
       <div className='flex items-center gap-x-5'>
        <a href="" className='text-zinc-800 text-2xl'>
<FaHeart/>
        </a>
        <a href="" className='text-zinc-800 text-2xl'>
<FaShoppingBag />
        </a>
        {/* hamburger */}
        <a href="#" className='text-zinc-800 text-2xl md-hidden' onClick={toggleMenu}>
      {showMenu ? <TbMenu3 />:<TbMenu2/>}
        </a>
       </div>
       {/* mobile menu */}
       <ul className={`flex flex-col bg-orange-500/15 p-10 gap-y-15 items-center gap-x-12 md:hidden absolute backdrop-blur-xl rounded-xl shadow-xl top-30 -left-full transform -translate-x-1/2 transition-all duration-500 ${showMenu ? 'left-1/2':""}`}>
        <li>
          <a href="#"className='font-semibold  tracking-wider  text-orange-500'>Home</a>
        </li>
         <li>
          <a href="#"className='font-semibold tracking-wider  text-zinc-800 hover:text-orange-500 '>AboutUs</a>
        </li>
         <li>
          <a href="#"className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500 '>Process</a>
        </li>
         <li>
          <a href="#"className='font-semibold tracking-wider text-zinc-800  hover:text-orange-500'>ContactUs</a>
        </li>
        <li className='flex  p-1 border-2 border-orange-500 rounded-full md:hidden'>
          <input type="text" name='text' id='text' placeholder='Search...'  autoComplete='off' className='flex-1 h-[5vh] px-3 focus:outline-none'/>
          <button className='bg-gradient-to-b from-orange-400 to-orange-500 text-white h-10 w-10 flex justify-center items-center rounded-full text-xl'>
            <IoSearch />
          </button>
        </li>
       </ul>

      </nav>
    </header>
  )
}

export default Navbar
