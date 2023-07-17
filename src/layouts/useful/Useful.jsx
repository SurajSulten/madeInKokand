import React from 'react'
import './useful.css'
import UsefulCard from '../../components/usefulCard/UsefulCard'

const Useful = () => {
  return (
    <div className='container'>
        <h2 className='useful-title'>Полезное</h2>
        <div className='useful-box'>
            <UsefulCard />
        </div>
        <button className='useful-button'>Посмотреть все</button>
    </div>
  )
}

export default Useful