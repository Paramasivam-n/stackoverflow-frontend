import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import moment from "moment";

const Questions = ({question}) => {
  const navigate=useNavigate()
  return (
    <div className='display-question-container'>
        <div className='display-votes-ans'>
            <p>{question.upVote.length - question.downVote.length}</p>
            <p>votes</p>
        </div>
        <div className='display-votes-ans'>
          <p>{question.noOfAnswers}</p>
          <p>Answers</p>
        </div>
        <div className= "display-questions-details">
            <Link to={`/Questions/${question._id}`} className='question-title-link'>{question.questionTitle}</Link>
            <div className='display-tags-time'>
              <div className='display-tags'>
                {
                  question.questionTags.map((tag) => (
                    <p key={tag}>{tag}</p>
                  ))
                }
              </div>
              <p  className='display-time'>
                asked {moment(question.askedOn).fromNow()} <span style={{color:'#0086d8',cursor:'pointer'}} onClick={()=>navigate(`/Users/${question.userId}`)}>{question.userPosted}</span>
              </p>
            </div>
        </div>
    </div>
  )
}

export default Questions
