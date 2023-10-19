import React from 'react'
import {Routes , Route} from 'react-router-dom'

import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import Questions from './pages/Questions/Questions'
import AskQuestion from './pages/AskQuestion/AskQuestion'
import DisplayQuestion from './pages/Questions/DisplayQuestion'
import Tags from "./pages/Tags/Tags";
import Users from "./pages/Users/Users";
import UserProfile from "./pages/UserProfile/UserProfile";
import Chatbot from './pages/chatbot/Chatbot'
import Subscription from './pages/Subscription/Subscription'

const AllRoutes = ({ slideIn, handleSlideIn }) => {
  return (
    <div>
        <Routes>
            <Route exact path='/' element={<Home slideIn={slideIn} handleSlideIn={handleSlideIn} />}/>
            <Route exact path='/Auth' element={<Auth/>}/>
            <Route exact path='/Questions' element={<Questions slideIn={slideIn} handleSlideIn={handleSlideIn} />}/>
            <Route exact path='/AskQuestion' element={<AskQuestion/>}/>
            <Route exact path='/Questions/:id' element={<DisplayQuestion slideIn={slideIn} handleSlideIn={handleSlideIn} />}/>
            <Route path="/Tags" element={<Tags slideIn={slideIn} handleSlideIn={handleSlideIn} />}/>
            <Route path="/Users"element={<Users slideIn={slideIn} handleSlideIn={handleSlideIn} />}/>
            <Route path="/Users/:id" element={<UserProfile slideIn={slideIn} handleSlideIn={handleSlideIn} />}/>
            <Route path="/chatbot" element={<Chatbot slideIn={slideIn} handleSlideIn={handleSlideIn} />}/>
            <Route path="/subscription" element={<Subscription slideIn={slideIn} handleSlideIn={handleSlideIn} />} />
        </Routes>
    </div>
  )
}

export default AllRoutes
