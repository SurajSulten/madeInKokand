import React from 'react'
import HeroCategorySlct from '../../components/HeroCategorySlct'
import './productSearch.css'
import BoxImage from '../../assets/img/box-image.png'
import GraphChartImage from '../../assets/img/graphChartImage.png'

const ProductSearch = () => {
  return (
    <div className='container product-search_container'>
        <div className='product-search-card'>
            <h3 className='product-search_title'>Пользуйтесь B2B чтобы найти продукт</h3>
            <div className='product-search_inputs'>
                <div style={{marginBottom: '8px', marginTop: '34px'}}><HeroCategorySlct width='420px' name='Категория продуктов'/></div>
                <div style={{marginBottom: '8px'}}><HeroCategorySlct width='420px' name='Подкатегория продуктов'/></div>
                <input type="text" placeholder='Введите название продукта' className='product-name_input' />
                
            </div>
            <button className='product-search_button'>Посмотреть все продукты</button>
            <img className='search_box-image' src={BoxImage} alt="box" />
        </div>
        <div className='product-search-card'>
            <h3 className='add-company_title'>Станьте поставщиком на рынке B2B, и продавайте свои продукты</h3>
            <p className='add-company_text'>Станьте поставщиком на рынке B2B</p>
            <button className='product-search_button'>+ Добавить свою компанию</button>
            <p className='add-company_item1'>+560</p>
            <p className='add-company_item2'>производителей</p>
            <img className='search_box-image' src={GraphChartImage} alt="chart" />
        </div>
    </div>
  )
}

export default ProductSearch