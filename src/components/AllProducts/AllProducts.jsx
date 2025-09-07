 import React from 'react'
 import BgAll from '../../assets/all-banner.jpg'
 import CategoryPage from '../CategoryPage/CategoryPage'
 import BgFruits from '../../assets/fruits-banner.jpg'
 const AllProducts = () => {
   return (
     <div>
<CategoryPage title="All products" bgImage={BgFruits} Categories={['All']}/>
     </div>
   )
 }
 
 export default AllProducts
 