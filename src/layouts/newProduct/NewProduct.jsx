import React from 'react'
import './newProduct.css'
import NewProductCard from '../../components/newProductCard/NewProductCard'
// import Carousel from 'react-multi-carousel'

// const responsive = {
//   superLargeDesktop: {
//     // the naming can be any, depends on you.
//     breakpoint: { max: 4000, min: 3000 },
//     items: 5
//   },
//   desktop: {
//     breakpoint: { max: 1920, min: 1024 },
//     items: 3
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1
//   }
// };


const NewProduct = () => {
  return (
    <div className='layout-bg'>
        <div className='container new-product-container'>
            <h3 className='new-product_title'>Новейшие товары</h3>
            
           
              
              <NewProductCard />
              
          
            <button className='new-product_button'>Посмотреть больше продуктов</button>
        </div>
    </div>
  )
}

export default NewProduct