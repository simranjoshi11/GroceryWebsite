import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import ProductList from '../ProductList/products'
import Cards from '../Cards/Cards'
import { Link } from 'react-router-dom'

const Products = () => {
  const categories =['All','Fruits','Vegetables','Dairy','SeaFood']
  const [activeTab,setActiveTab] =useState('All');
 let filteredItems = activeTab ==="All" ?
ProductList : ProductList.filter(item=>item.category === activeTab);
  const renderCards = filteredItems.slice(0,8).map(products=>{
    return(
     <Cards    key={products.id}  image={products.image} name={products.name} price={products.price} /> 
    )
  })

  return (
    <section>
      <div className='max-w-[1400px] mx-auto px-10 py-20'>
     <Heading highlight="Our" heading="Products"/>

     {/* tabs */}
     <div className='flex gap-3 flex-wrap justify-center mt-10'>{categories.map(category=>{
      return(
        <button key={category} className={`bg-zinc-100 px-5 py-2 text-lg cursor-pointer rounded-lg ${activeTab===category ? 'bg-gradient-to-b from-orange-400 to-orange-500 text-white':'bg-zinc-100'}`} onClick={()=>setActiveTab(category)}>
             {category}
        </button>
      )
     })}</div>
     {/* product listing */}
     <div className='grid grid-cols-1 md:grid-cols-4 gap-9 mt-20'>
      {renderCards}
     </div>

     <div className='mt-15  mx-auto w-fit'>
      <Link to="/allproducts" className='bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer'>view all</Link>
     </div>
      </div>
    </section>
  )
}

export default Products

