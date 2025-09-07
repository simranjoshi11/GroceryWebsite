 import React from 'react'
import Heading from '../Heading/Heading'
import { TbCircleNumber1Filled,TbCircleNumber2Filled,TbCircleNumber3Filled ,TbCircleNumber4Filled} from 'react-icons/tb'
import { PiFactory, PiPlant } from 'react-icons/pi';
import {SlBadge} from 'react-icons/sl';
 import {BsTruck} from 'react-icons/bs';
 const Process = () => {
  const renderSteps = steps.map(item=>{
return(
     <div   key={item.id} className={`flex-1 basis-[300px] ${item.id%2===0?'md:-mt-100':""}`}>
     <span className=' flex justify-center rounded-full items-center w-18 h-18 md:mx-auto text-8xl text- bg-zinc-800 outline-[3px] outline-offset-7 text-white outline-dotted outline-zinc-800 '>{item.number}</span>
     <div className='flex items-center mt-10 gap-x-5'>
      
        <span className='flex bg-gradient-to-b from-orange-400 to-orange-500 h-15 w-15 rounded-full text-3xl  justify-center items-center  text-white'>{item.icon}</span>
      
      <div className='flex-1'>
        <h4 className='text-zinc-800 text-2xl font-bold'>{item.title}</h4>
        <p className='text-zinc-600 mt-2 '>{item.para}</p>
      </div>
     </div>
     </div> 
    )
  }
    
  )
   return (
    <section>
         <div className='max-w-[1400px] mx-auto px-10 py-20'>
          <div className='w-fit mr-auto '>
 <Heading highlight = "our" heading="Process"/>
          </div>
      <div className='flex flex-wrap gap-y-17 mt-10 md:mt-20 items-center  justify-center md:pt-50'>
      {renderSteps}
      </div>
     </div>
    </section>
    
   )
 }
 
 export default Process
 const steps=[
  {
    id:1,
    number:<TbCircleNumber1Filled/>,
    title:"sourcing",
    para:"It is a long established fact that a reader",
    icon: <PiPlant/>,
  },
    {
    id:2,
    number:<TbCircleNumber2Filled/>,
    title:"Manufacturing",
    para:"It is a long established fact that a reader",
    icon: <PiFactory/>,
  },
    {
    id:3,
    number:<TbCircleNumber3Filled/>,
    title:"Quality control",
    para:"It is a long established fact that a reader",
    icon: <SlBadge/>,
  },
    {
    id:4,
    number:<TbCircleNumber4Filled/>,
    title:"Logistics",
    para:"It is a long established fact that a reader",
    icon: <BsTruck/>,
  },

 ]
 