import React from 'react'

import RightSidebar from '../../components/RightSidebar/RightSidebar';
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import '../../App.css'
 

const Questions = ({ slideIn, handleSlideIn }) => {
      return (
        <div className='home-container-1'>
          <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
          <div className='home-container-2'>
              <HomeMainbar/>
              <RightSidebar/>
          </div>
        </div>
      )
    }
    
export default Questions
