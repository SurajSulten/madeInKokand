import React from 'react'
import './contact.css'
import LocationIcon from '../../assets/svg/u_location-point.svg'
import PhoneIcon from '../../assets/svg/u_phone-alt.svg'
import MailIcon from '../../assets/svg/mail.svg'
import FacebookIcon from '../../assets/svg/akar-icons_facebook-fill.svg'
import InstagramIcon from '../../assets/svg/ant-design_instagram-filled.svg'
import TelegramIconIcon from '../../assets/svg/akar-icons_telegram-fill.svg'
import YoutubeIcon from '../../assets/svg/akar-icons_youtube-fill.svg'
import Map from '../../assets/img/map1.jpg'
import CountrySelect from '../../components/heroForm/CountrySelect'

const Contact = () => {
  return (
    <div className='container contact-container'>
        <div className='contact-details_box'>
            <h2 className='contact-title'>Остались вопросы? Позвоните нам, и мы вас проконсультируем</h2>
            <p className='contact-location'><img src={LocationIcon} alt="location-icon" />ул Турон 1, г.Коканд, Ферганская область, Республика Узбекистан</p>
            <a href='tel:+998 88 415 0922' className='contact-phone'><img src={PhoneIcon} alt="location-icon" />+998 88 415 0922</a>
            <a href='mailto:info@madeinkokand.uz' className='contact-phone'><img src={MailIcon} alt="location-icon" />info@madeinkokand.uz</a>
            <div className='contact-social'>
                <img src={FacebookIcon} alt="facebook" />
                <img src={InstagramIcon} alt="instagram" />
                <img src={TelegramIconIcon} alt="telegram" />
                <img src={YoutubeIcon} alt="youtube" />
            </div>
            <img className='contact-map' src={Map} alt="map" />
        </div>
        <div className='contact-form'>
          <h2 className='contact-form_title'>Заполните форму запроса продукта</h2>
          <p className='contact-form_p'>Ваше имя</p>
          <input className='contact-form_name_input' type="text" placeholder='Ваше имя' />
          <p className='contact-form_p'>Страна</p>
          <CountrySelect />
          <p className='contact-form_p'>Какой продукт вы ищете?*</p>
          <textarea className='contact-form_textarea' cols="30" rows="10" placeholder='Опишите продукт'></textarea>
          <button className='contact-form_btn'>Отправить</button>
        </div>
    </div>
  )
}

export default Contact