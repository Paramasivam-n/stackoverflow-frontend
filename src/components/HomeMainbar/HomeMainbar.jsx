import React from 'react'
import {  useLocation, useNavigate} from 'react-router-dom'
import './HomeMainbar.css'
import { useSelector } from 'react-redux'
import QuestionsList from './QuestionsList'

const HomeMainbar = () => {
  
  const location = useLocation()
  const user = 1;
  const navigate = useNavigate()

  const questionList = useSelector(state => state.questionReducer)
  // console.log(questionList)
//   var questionList = [{
//     _id:1,
//     upVotes: 3,
//     downVotes: 2,
//     noOfAnswers:2,
//     questionTitle:"What is a function?",
//     questionBody:"It meant to be",
//     questionTags:["java","node js","react js","mongodb"],
//     userPosted:"mano",
//     userId:1,
//     askedOn:"jan 1",
//     answer: [{
//       answerBody:"Answer",
//       userAnswered:"kumar",
//       answeredOn:"jan 2",
//       userId:2,
//     }]
//   },{
//     _id:2,
//     upVotes: 3,
//     downVotes: 2,
//     noOfAnswers:0,
//     questionTitle:"What is a function?",
//     questionBody:"It meant to be",
//     questionTags:["javaScript","python","R"],
//     userPosted:"mano",
//     userId:1,
//     askedOn:"jan 1",
//     answer: [{
//       answerBody:"Answer",
//       userAnswered:"kumar",
//       answeredOn:"jan 2",
//       userId:2,
//     }]
//   },{
//     _id:3,
//     upVotes: 3,
//     downVotes: 2,
//     noOfAnswers:0,
//     questionTitle:"What is a function?",
//     questionBody:"It meant to be",
//     questionTags:["javaScript","python","R"],
//     userPosted:"mano",
//     userId:1,
//     askedOn:"jan 1",
//     answer: [{
//       answerBody:"Answer",
//       userAnswered:"kumar",
//       answeredOn:"jan 2",
//       userId:2,
//     }]
//   }
// ]

const checkAuth = () =>{
  if(user === null){
    alert("login or signup to ask a question")
    navigate('/Auth')
  }else{
    navigate('/AskQuestion')
  }
}

  return (
    <div className='main-bar'>
      <div className="main-bar-header">
        {
          location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button to='/AskQuestion' onClick={checkAuth} className='ask-btn'>Ask Question</button>
      </div>
      <div>
        {
          questionList.data === null ?
          <h1>Loading...</h1> :
          <>
            <p>{ questionList.data.length } questions</p>
            <QuestionsList questionList={questionList.data}/>
          </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar

