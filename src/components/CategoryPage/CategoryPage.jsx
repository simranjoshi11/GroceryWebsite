 import React from 'react'
import Banner from '../Banner/Banner'
import ProductList from '../ProductList/products'

import Cards from '../Cards/Cards'
import Categories from '../categories/Categories'
 
 const CategoryPage = ({title,bgImage,Categories=[]}) => {
  
let filteredItems = Categories.includes('All')? ProductList :
ProductList.filter(item=>Categories.includes(item.category))

   const renderProduct = filteredItems.map(products=>{
    return(
      <Cards key={products.id} image={products.image} name={products.name} price={products.price}/>
    )
   }
    
   )

   return (
     <div>
       <Banner title={title} bgImage={bgImage} />

       <div className='grid grid-cols-1 md:grid-cols-4 gap-9 py-20 max-w-[1400px] px-10 mx-auto'>
        {renderProduct}
        </div>
     </div>
   )
 }
 
 export default CategoryPage
 