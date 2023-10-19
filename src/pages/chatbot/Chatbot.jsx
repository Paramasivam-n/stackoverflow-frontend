import React, { useState } from 'react'
import './chatbot.css'
import { useDispatch, useSelector } from 'react-redux';
import GetOtpWidget from './GetOtpWidget';
import VerifyOTPForm from './VerifyOTP';
import ChatbotApp from './ChatbotApp';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
const Chatbot = ({ slideIn, handleSlideIn }) => {
  const [isVerifyOtpFormVisible, setIsVerifyOtpFormVisible] = useState(false);
  const loggedInUser = useSelector((state) => state.currentUserReducer?.result) || null;
  const [isOtpWidgetVisible, setIsOtpWidgetVisible] = useState(false)
  const isVerified = useSelector(state => state.chatbotReducer.isVerified)
  const dispatch = useDispatch();

  const handleNext = () => {
    setIsOtpWidgetVisible(false)
    setIsVerifyOtpFormVisible(true)
  }

  const onOtpVerified = () => {
    setIsOtpWidgetVisible(false)
    setIsVerifyOtpFormVisible(false)
    dispatch({ type: 'VERIFIED' })
    window.botpressWebChat.onEvent((event) => {
      if (event.type === 'LIFECYCLE.LOADED') {
        window.botpressWebChat.sendEvent(window.botpressWebChat.sendEvent({ type: 'show' }))
      }
    }, ['LIFECYCLE.LOADED'])
  }

  const handleIconClick = () => {
    if (!loggedInUser) {
      alert('You must be logged in to ask questions. to Chatbot.')
      return
    }
    setIsOtpWidgetVisible(true)
  }


  return (
    <div className='home-container-1'>
      <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn}/>
      <div className='home-container-2'>
      <div className='main-container'>
      <div className='small-container'>
        {(isOtpWidgetVisible && loggedInUser) && <GetOtpWidget handleClose={() => setIsOtpWidgetVisible(false)} handleNext={handleNext} />}
        {(!isOtpWidgetVisible && isVerifyOtpFormVisible && loggedInUser) && <VerifyOTPForm email={loggedInUser.email} onOtpVerified={onOtpVerified} />}
        {(isVerified && loggedInUser) && <ChatbotApp/>}
        <div className='button-container'>
          {(!isOtpWidgetVisible && !isVerifyOtpFormVisible && !isVerified) && <button onClick={handleIconClick} className='ask-button'>Ask Question to Chatbot</button>}
        </div>
      </div>
    </div>
      </div>
    </div>
  )
}

export default Chatbot