import React from 'react'
import './faq.css'
import PlusSvg from '../../assets/svg/plusSvg.svg'

const FAQ = () => {
  return (
    <div className='container faq-container'>
        <h4 className='faq-title'>Часто задаваемые вопросы</h4>
        <div>
            <div className='faq-question'>
                <div>
                <p className='faq-text'>Правила организации командировок водителей в случаях перевозки, включающих пустые рейсы</p>
                <p className='faq-answer_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil porro eaque nesciunt ducimus. Non repellendus quis sunt optio ducimus ipsa voluptas rerum dolores minus id? Tempora, quibusdam cumque. Veritatis, quaerat.</p>
                </div>
               
                <button className='faq-button'><img src={PlusSvg} alt="" /></button>
            </div>
            <div className='faq-question'>
                <p className='faq-text'>Использование электрогрузовиков снижает загрязнение окружающей среды на 63% по сравнению с их дизельными аналогами в соответствии с ICCT.</p>
                <button className='faq-button'><img src={PlusSvg} alt="" /></button>
            </div>
            <div className='faq-question'>
                <p className='faq-text'>Особенности транспортировки грузов в Европе</p>
                <button className='faq-button'><img src={PlusSvg} alt="" /></button>
            </div>
            <div className='faq-question'>
                <p className='faq-text'>Правила организации командировок водителей в случаях перевозки, включающих пустые рейсы</p>
                <button className='faq-button'><img src={PlusSvg} alt="" /></button>
            </div>
            <div className='faq-question'>
                <p className='faq-text'>Особенности транспортировки грузов в Европе</p>
                <button className='faq-button'><img src={PlusSvg} alt="" /></button>
            </div>
        </div>
    </div>
  )
}

export default FAQ