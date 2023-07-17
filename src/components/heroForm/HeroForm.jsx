import React from 'react'
import './heroForm.css'
import CountrySelect from './CountrySelect'


const HeroForm = () => {
  return (
    <div>
        <form className="hero-form" action="">
            <h3 className='hero-form_title'>
                Подать заявку на размещение продукта на оптовом рынке
            </h3>
            <p className='form-input_name'>Ваше имя</p>
            <input type="text" placeholder='Ваше имя' className='form-client_name' />
            <p className='form-input_name'>Страна</p>
            <CountrySelect />
            <p className='form-input_name'>Номер телефона</p>
            <input type="text" placeholder='(+998)' className='form-client_name' />
            <p className='form-input_name'>Название компании</p>
            <input type="text" placeholder='Название компании' className='form-client_name' />
            <button variant='contained' className='hero-form_button' >Отправить</button>
        </form>
    </div>
  )
}

export default HeroForm