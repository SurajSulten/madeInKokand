import React from 'react'
import './footer.css'
import InstagramIcon from '../../assets/svg/ant-design_instagram-filled.svg'
import FacebookIcon from '../../assets/svg/akar-icons_facebook-fill.svg'
import TelegramIcon from '../../assets/svg/akar-icons_telegram-fill.svg'
import YoutubeIcon from '../../assets/svg/akar-icons_youtube-fill.svg'

const Footer = () => {
  return (
    <div className='container ' >
        <div className='footer-container'>
            <div className='footer-content'>
                <div>
                    <h4 className='footer-title'>Категории</h4>
                    <p className='footer-text'>Хлопковая пряжа</p>
                    <p className='footer-text'>Ткани</p>
                    <p className='footer-text'>Аксессуары</p>
                    <p className='footer-text'>Другие продукты</p>
                </div>
                <div>
                    <h4 className='footer-title'>Служба поддержки</h4>
                    <p className='footer-text'>Хлопковая пряжа</p>
                    <p className='footer-text'>Ткани</p>
                    <p className='footer-text'>Аксессуары</p>
                </div>
                <div>
                    <h4 className='footer-title'>Быстрые ссылки</h4>
                    <p className='footer-text'>Свяжиьесь с нами</p>
                    <p className='footer-text'>О компании</p>
                </div>
            </div>
            <div className='footer-social'>
                <button className='footer-social_icon' href="#facebook"><img src={FacebookIcon} alt="facebook" /></button>
                <button className='footer-social_icon' href="#instagram"><img src={InstagramIcon} alt="" /></button>
                <button className='footer-social_icon' href="#instagram"><img src={TelegramIcon} alt="" /></button>
                <button className='footer-social_icon' href="#instagram"><img src={YoutubeIcon} alt="" /></button>
            </div>
        </div>
        <div className='footer-line'></div>
        <div className='developer-rights'>
            <p className='footer-developer-rights'>©2023 all rights reserved</p>
            <p className='footer-developer-rights'>Developped by: S-Orca IT center</p>
        </div>
        
    </div>
  )
}

export default Footer