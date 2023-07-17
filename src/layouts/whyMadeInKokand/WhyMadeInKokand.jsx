import React from 'react'
import './whyMadeInKokand.css'
import WhyIcon1 from '../../assets/svg/whyIcon1.svg'
import WhyIcon2 from '../../assets/svg/whyIcon2.svg'
import WhyIcon3 from '../../assets/svg/whyIcon3.svg'
import WhyIcon4 from '../../assets/svg/whyIcon4.svg'

const WhyMadeInKokand = () => {
  return (
    <div className='container why-container'>
        <h2 className='why-title'>Почему Made in Kokand</h2>
        <div className='why-content'>
            <div className='why-card'>
                <img src={WhyIcon1} alt="icon" />
                <p>Доставка по всему миру</p>
            </div>
            <div className='why-card'>
                <img src={WhyIcon2} alt="icon" />
                <p>Лучшее качество</p>
            </div>
            <div className='why-card'>
                <img src={WhyIcon3} alt="icon" />
                <p>Лучшие предложения</p>
            </div>
            <div className='why-card'>
                <img src={WhyIcon4} alt="icon" />
                <p>Безопасные платежи</p>
            </div>
        </div>
    </div>
  )
}

export default WhyMadeInKokand