import React from 'react'
import '../../layouts/newProduct/newProduct.css'
import Product1Img from '../../assets/img/product1.png'
import Product2Img from '../../assets/img/product2.png'
import Product3Img from '../../assets/img/product3.png'
import Product4Img from '../../assets/img/product4.png'
import StarSVG from '../../assets/svg/StarSVG.svg'
import ArrowIconLeft from '../../assets/svg/arrowIcon-left.svg'
import ArrowIconRight from '../../assets/svg/arrowIcon-right.svg'

const productData = [
    {
       image: Product1Img 
    },
    {
       image: Product2Img 
    },
    {
       image: Product3Img 
    },
    {
       image: Product4Img 
    },
] 

const NewProductCard = () => {
  return (
    <div className='new-product_box'>
        <button className='arrow-icon_left'><img src={ArrowIconLeft} alt="arrow" /></button>
        {productData.map((productDetails) => {
            return (
                <div className='new-product_card'>
                    <div className='new-product_image'>
                        <img src={productDetails.image} alt="product-img" />
                    </div>
                    <p className='product-card_name'>Футболки – для мужчин и женщин</p>
                    <a href='#product' className='product-card_category'>Футболки</a> 
                    <div> 
                        <button className='product-card_star'><img src={StarSVG} alt="star" /></button>
                        <button className='product-card_star'><img src={StarSVG} alt="star" /></button>
                        <button className='product-card_star'><img src={StarSVG} alt="star" /></button>
                        <button className='product-card_star'><img src={StarSVG} alt="star" /></button>
                        <button className='product-card_star'><img src={StarSVG} alt="star" /></button>
                    </div>
                </div>
            )
        })}  
        <button className='arrow-icon_right'><img src={ArrowIconRight} alt="arrow" /></button> 
    </div>
  )
}

export default NewProductCard