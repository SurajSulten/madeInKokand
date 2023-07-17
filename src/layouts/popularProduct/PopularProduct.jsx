import React from 'react'
import './popularProduct.css'
import NewProductCard from '../../components/newProductCard/NewProductCard'

const PopularProduct = () => {
  return (
    <div className='layout-bg'>
        <div className='container new-product-container'>
            <h3 className='new-product_title'>Популярные товары</h3>
            <NewProductCard />
            <button className='new-product_button'>Посмотреть больше продуктов</button>
        </div>
    </div>
  )
}

export default PopularProduct