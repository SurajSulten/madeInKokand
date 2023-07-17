import React from 'react'
import './about.css'
import AboutImg from '../../assets/img/about-img.png'

const About = () => {
  return (
    <div className='layout-bg'>
        <div className='container about-container'>
            <div className='about-content'>
                <h2 className='about-title'>Made in Kokand</h2>
                <p className='about-text'>Made in Kokand — это платформа, на которой производители, поставщики и покупатели могут найти друг друга. Используйте платформу для расширения экспорта ваших компаний и привлечения зарубежных покупателей. Или найдите поставщиков и продукты по всему миру и свяжитесь с ними бесплатно.</p>
            </div>
            <img src={AboutImg} alt="curier-img" />
        </div>
    </div>
  )
}

export default About