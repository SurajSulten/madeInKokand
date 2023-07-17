import React from 'react'
import './b2bSolution.css'
import B2bSolutionContent from './B2bSolutionContent'
import IconSearch from '../../assets/svg/play-list-search.svg'
import IconProducer from '../../assets/svg/u_react.svg'
import IconContract from '../../assets/svg/ri_shake-hands-line.svg'


const B2bSoution = () => {
  return (
    <div className='layout-bg'>
      <div className='container b2b-solution_box'>
          <div className='b2b-solution_title'><h2 className='b2b-solution_titleH2'>B2B решение для вашего бизнеса</h2></div>
          <div className='btb-solution_content'>
            <B2bSolutionContent icon={IconSearch} title='Поиск' text='Сделайте поиск и найдите продукт' />
            <B2bSolutionContent icon={IconProducer} title='Производитель' text='Связаться с производителями для обсуждения цен' />
            <B2bSolutionContent icon={IconContract} title='Договор' text='Заключите договор с производителем' />
          </div>
      </div>
    </div>
  )
}

export default B2bSoution