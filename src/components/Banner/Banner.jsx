 import React from 'react'
 
 const Banner = ({title,bgImage}) => {
   return (
     <div className=' flex relative justify-center items-center bg-center bg-cover h-[50vh] mt-25' style={{ backgroundImage: `url(${bgImage})` }}
>
       <h2 className='text-5xl bg-white text-zinc-800 font-bold p-5 z-10 rounded-xl'>{title}</h2>
       <div className='bg-black/50 absolute inset-0'>{title}</div>
     </div>
   )
 }
 
 export default Banner
 