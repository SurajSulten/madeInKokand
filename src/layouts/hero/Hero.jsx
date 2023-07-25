import React from 'react'
import './hero.css'
// import HeroCategorySlct from '../../components/HeroCategorySlct'
import SearchSvg from '../../assets/svg/search.svg'
import HeroForm from '../../components/heroForm/HeroForm'

const Hero = () => {
  return (
    <div className='hero-bg'>
        <div className='container hero-container'>
            <div>
                <h1 className='hero-title'>Оптовый рынок для каждого случая</h1>
                <p className='hero-text'>Мы поможем вам найти товары произведенные в Узбекистане напрямую от производителей</p>
                <div className='hero-product-category'>
                    {/* <HeroCategorySlct width='208px' name='Категория продуктов'/> */}
                    <div className='hero-search'>
                        <input placeholder='Название продукта' className='hero-category_search' type="text" />
                        <button className='hero-search_button'><img src={SearchSvg} alt="" /></button>
                    </div>
                </div>
            </div>
            <HeroForm />
        </div>
    </div>
  )
}

export default Hero