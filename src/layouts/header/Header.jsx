import React from 'react'
import './header.css'
import Logo from  '../../assets/svg/logo.svg'
import Navbar from '../../components/navbar/Navbar'
import GlobeSvg from    '../../assets/svg/globe-alt.svg'



const Header = () => {
  return (
    <div className='header'>
        <div className='header-left'>
            <a href="/"><img src={Logo} alt="logo" /></a>
            <Navbar />
        </div>
        <div className='header-right'>
            <div className='language-change'>
                <img src={GlobeSvg} alt="globeSvg" />
                <select name="" id="lang-change" className='language-change_select'>
                    <option value="En">En</option>
                    <option value="Ru">Ru</option>
                    <option value="Ru">Uz</option>
                </select>
            </div>
            <button className='header-fisrtButton' >
                Войти
            </button>
            <button className='header-secondButton'>
                + Добавить компанию
            </button>
        </div>
    </div>
  )
}

export default Header