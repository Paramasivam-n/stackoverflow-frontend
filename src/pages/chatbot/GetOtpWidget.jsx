import axios from 'axios';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { baseURL } from '../../api';
import loadingIcon from '../../assets/loading-icon.svg';
import { AiOutlineClose } from 'react-icons/ai'
import './getOtpWidget.css'
const GetOtpWidget = ({ handleNext, handleClose }) => {
    const loggedInUser = useSelector((state) => state.currentUserReducer?.result) || null;
    const [isOtpSending, setIsOtpSending] = useState(false)
    const getOtp = async () => {
        if (!loggedInUser) {
            return alert('You must be logged in to ask questions to chatbot.');
        }
        setIsOtpSending(true)
        try {
            await axios.post(baseURL + '/user/getOTP', { email: loggedInUser.email })
            handleNext();
        } catch (error) {
            console.error(error);
            alert(error.response.data.message);
        }
        setIsOtpSending(false);
    }
    return (
        <div className='wrapper'>
            <div><AiOutlineClose onClick={handleClose} className='close-icon' /></div>
            <p>We send OTP to your email.  {loggedInUser.email}</p>
            <p>before ask any Question to Chatbot.</p>
            {!isOtpSending && <button onClick={getOtp} className='get-otp-button'>Get OTP</button>}
            {
                isOtpSending && <div className='loading-container'><img className='loading-icon' src={loadingIcon} alt='loading-icon' /></div>
            }
        </div>
    )
}

export default GetOtpWidget