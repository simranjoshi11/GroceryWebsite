import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Footers = () => {
  return (
    <footer className='bg-zinc-100 py-20'>
<div className='flex flex-wrap gap-y-12 max-w-[1400px] px-10 mx-auto'>

    <div className='flex-1 basis-[300px]'>
     <a href="#" className='text-3xl font-bold'>Fresh <span className='text-orange-500 uppercase'>G</span>O</a>
     <p className='text-zinc-600 mt-6 max-w-[350px]'>
      Bred for a high content of beneficial substances. Our products are all fresh and healthy.
     </p>
     <p className='text-zinc-800 mt-6'>
      2025 &copy; all Rights Reserved
     </p>

</div>
<ul className='flex-1' >
<li>
  <h5 className='text-zinc-800 text-2xl font-bold'>Company</h5>
</li>

<li className='mt-6'>
  <a href="#" className='hover:text-orange-500 text-zinc-800 '>About</a>
</li>
<li className='mt-6'>
  <a href="#" className='hover:text-orange-500 text-zinc-800 '>FAQ</a>
</li>

</ul>
<ul  className='flex-1 '>
<li>
  <h5 className='text-zinc-800 text-2xl font-bold'>Support</h5>
</li>

<li className='mt-6'>
  <a href="#" className='hover:text-orange-500 text-zinc-800 '>Support Center</a>
</li>
<li className='mt-6'>
  <a href="#" className='hover:text-orange-500 text-zinc-800 '>Feedback</a>
</li>
<li className='mt-6'>
  <a href="#" className='hover:text-orange-500 text-zinc-800 '>Contact Us</a>
</li>

</ul>
<div className='flex-1'>
  <h5 className='text-zinc-800 text-2xl font-bold' >Stay Connected</h5>
  <p className='mt-6 text-zinc-600'>
    Questions or Feedbacks? <br />
    we'd love to hear from you
  </p>
  <div className='p-1 flex bg-white rounded-lg mt-6'>
    <input type="Email" name='Email' id="email" autoComplete='off' placeholder='Email Address' className='h-[5vh] pl-4 flex-1 focus:outline-none'/>
    <button className='bg-gradient-to-b from-orange-400 to-orange-500 p-2 rounded-lg text-white text-2xl hover:to-orange-600 cursor-pointer'>
      <MdOutlineKeyboardArrowRight />
    </button>
  </div>
</div>
</div>
    </footer>
  )
}

export default Footers
