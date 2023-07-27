import React from 'react'
import './usefulCard.css'
import UsefulImage1 from '../../assets/img/usefulImg1.png'
import UsefulImage2 from '../../assets/img/usefulImg2.png'
import UsefulImage3 from '../../assets/img/usefulImg3.png'

const usefulCardData = [
    {
        di: 1,
        image: UsefulImage1
    },
    {
        di: 2,
        image: UsefulImage2
    },
    {
        di: 3,
        image: UsefulImage3 
    },
]


const UsefulCard = () => {
  return (
    <>
        {usefulCardData.map((usefulCardInfo) => {
            return (
                <div className='useful-card'>
                    <img className='useful-image' src={usefulCardInfo.image} alt="ship" />
                    <p className='useful-date'>2.06.2023</p>
                    <p className='useful-card_name'>Kokand: how the country manages its exports in times</p>
                    <p className='useful-card_text'>Freight rates on Asian routes have been in a downwa...</p>
                    <p className='useful-card_more'>Подробно</p>
                </div>
            )
        })}
        
    </>
  )
}

export default UsefulCard