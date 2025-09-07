 import React from 'react'
 import Navbar from '../Navbar/Navbar'
import Front from '../Front/Front'
import Categories from '../categories/Categories'
import Values from '../Values/Values'
import Products from '../Products/Products'
import Discount from '../Discount/Discount'
import Process from '../Process/Process'
import Testimonials from '../Testimonials/Testimonials'
import Footers from '../Footers/Footers'
 const Home = () => {
   return (
     <div>
       
       <Front/>
       <Categories/>
       <Values/>
       <Products/>
       <Discount/>
       <Process/>
       <Testimonials/>
      
     </div>
   )
 }
 
 export default Home
 