import React from 'react'
import './trust.css'
import B2bDiscountSVG from '../../assets/svg/b2bDiscountSVG.svg'
import EuroPagesSVG from '../../assets/svg/europagesSVG.svg'
import EvernoteSVG from '../../assets/svg/evernoteSVG.svg'
import AlibabaSVG from '../../assets/svg/alibabaSVG.svg'
import UzumSVG from '../../assets/svg/uzumSVG.svg'
import HokimligSVG from '../../assets/svg/hokimligSVG.svg'

const Trsut = () => {
  return (
    <div className='container trust-container'>
        <h2 className='trust-title'>Нам доверяют</h2>
        <div className='about-images'>
          <img src={B2bDiscountSVG} alt="b2bDiscount" />
          <img src={EuroPagesSVG} alt="b2bDiscount" />
          <img src={EvernoteSVG} alt="b2bDiscount" />
          <img src={AlibabaSVG} alt="b2bDiscount" />
          <img src={UzumSVG} alt="b2bDiscount" />
          <img src={HokimligSVG} alt="b2bDiscount" />
        </div>
    </div>
  )
}

export default Trsut