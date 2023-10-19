import React from 'react'
import './subscription.css'
import Plans from './Plans'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
const Subscription = ({ slideIn, handleSlideIn }) => {
  return (
    <div className='home-container-1'>
      <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn}/>
      <div className='home-container-2'>
        <Plans />
      </div>
    </div>
  )
}

export default Subscription