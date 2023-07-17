import React from 'react'
import './b2bSolution.css'

const B2bSolutionContent = (props) => {
  return (
    <div className='b2b-solution_card'>
        <img src={props.icon} alt="search-icon" className='solution-card_icon'/>
        <p className='solution-card_title'>{props.title}</p>
        <p className='solution-card_text'>{props.text}</p>
    </div>
  )
}

export default B2bSolutionContent