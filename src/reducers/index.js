import { combineReducers } from "redux";
import authReducer from './auth';
import currentUserReducer from './currentUser'
import questionReducer from './questions.js'
import usersReducer from "./users.js";
import chatbotReducer from './chatbot.js';



export default combineReducers({
    authReducer, currentUserReducer,questionReducer,usersReducer,chatbotReducer
})