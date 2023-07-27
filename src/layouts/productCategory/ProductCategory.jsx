import React from 'react'
import './productCategory.css'
// import ProductCategoryCard from '../../components/productCategoryCard/ProductCategoryCard'
import categoryImg1 from '../../assets/img/thread.png'
import categoryImg2 from '../../assets/img/tshirtsmall.png'
import categoryImg3 from '../../assets/img/roller.png'
import categoryImg4 from '../../assets/img/belt.png'
import categoryImg5 from '../../assets/img/shoes.png'
import categoryImg6 from '../../assets/img/molotok.png'

const ProductCategory = () => {
  return (
    <div className='container product-category-container'>
        <h3 className='product-category_title'>Просмотрите товары по категориям</h3>
        <div className='product-category_box'>
                  <div className='product-category_card'>
                    <div className='product-image_bg'><img src={categoryImg1} style={{borderRadius: '50%'}} alt="thread"/></div>
                    <p className='product-category_name'>Ткани, нить & аксессуары</p>
                    <p className='product-category_text'>Хлопковая пряжа</p>
                    <p className='product-category_text'>Ткани</p>
                    <p className='product-category_text'>Аксессуары</p>
                    {/* <p className='product-category_text'>Другие продукты</p> */}
                </div>
                  <div className='product-category_card'>
                  <div className='product-image_bg'><img  src={categoryImg2} style={{borderRadius: '50%', marginLeft: '5px' }} alt="thread"/></div>
                    <p className='product-category_name'>Трикотажные изделия</p>
                    <p className='product-category_text'>Хлопковая пряжа</p>
                    <p className='product-category_text'>Ткани</p>
                    <p className='product-category_text'>Аксессуары</p>
                    {/* <p className='product-category_text'>Другие продукты</p> */}
                </div>
                  <div className='product-category_card'>
                    <div className='product-image_bg'><img src={categoryImg3} style={{borderRadius: '50%', }} alt="thread"/></div>
                    <p className='product-category_name'>Для дома</p>
                    <p className='product-category_text'>Хлопковая пряжа</p>
                    <p className='product-category_text'>Ткани</p>
                    <p className='product-category_text'>Аксессуары</p>
                    {/* <p className='product-category_text'>Другие продукты</p> */}
                </div>
                  <div className='product-category_card'>
                    <div className='product-image_bg'><img src={categoryImg4} style={{borderRadius: '50%'}} alt="thread"/></div>
                    <p className='product-category_name'>Кожаные изделия</p>
                    <p className='product-category_text'>Хлопковая пряжа</p>
                    <p className='product-category_text'>Ткани</p>
                    <p className='product-category_text'>Аксессуары</p>
                    {/* <p className='product-category_text'>Другие продукты</p> */}
                </div>
                  <div className='product-category_card'>
                    <div className='product-image_bg'><img src={categoryImg5} style={{borderRadius: '50%'}} alt="thread"/></div>
                    <p className='product-category_name'>Оптовая обувь</p>
                    <p className='product-category_text'>Хлопковая пряжа</p>
                    <p className='product-category_text'>Ткани</p>
                    <p className='product-category_text'>Аксессуары</p>
                    {/* <p className='product-category_text'>Другие продукты</p> */}
                </div>
                  <div className='product-category_card'>
                    <div className='product-image_bg'><img src={categoryImg6} style={{borderRadius: '50%'}} alt="thread"/></div>
                    <p className='product-category_name'>Строительные материалы</p>
                    <p className='product-category_text'>Хлопковая пряжа</p>
                    <p className='product-category_text'>Ткани</p>
                    <p className='product-category_text'>Аксессуары</p>
                    {/* <p className='product-category_text'>Другие продукты</p> */}
                </div>
        </div>
    </div>
  )
}

export default ProductCategory