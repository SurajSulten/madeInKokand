import React from 'react'
import './productCategoryCard.css'



const ProductCategoryCard = (props) => {
  return (
    
                <div className='product-category_card'>
                    <div className='product-image_bg' style={{}}><img src={props.image} alt="thread"/></div>
                    <p className='product-category_name'>Ткани, нить & аксессуары</p>
                    <p className='product-category_text'>Хлопковая пряжа</p>
                    <p className='product-category_text'>Ткани</p>
                    <p className='product-category_text'>Аксессуары</p>
                    <p className='product-category_text'>Другие продукты</p>
                
                </div>
            )
}

export default ProductCategoryCard