import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgFruits from '../../assets/fruits-banner.jpg'

const Fruits = () => {
  return (
    <div>
      <CategoryPage title="Fruits and veggies" bgImage={BgFruits}  Categories={['Fruits','vegetables']}/>
    </div>
  )
}

export default Fruits
