import React, { useEffect} from 'react'
import { useSelector } from 'react-redux'

const ChatbotApp = () => {
    const isVerified=useSelector(state=>state.chatbotReducer.isVerified)
    const initFunction = () => {
        const script = document.createElement('script')
        script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'
        script.async = true
        document.body.appendChild(script)
        
        script.onload = () => {
//             <script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
// <script>
//   window.botpressWebChat.init({
//       "composerPlaceholder": "Chat with bot",
//       "botConversationDescription": "This chatbot was built surprisingly fast with Botpress",
//       "botId": "4245372f-5902-4f69-abc3-17a8818f758b",
//       "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
//       "messagingUrl": "https://messaging.botpress.cloud",
//       "clientId": "4245372f-5902-4f69-abc3-17a8818f758b",
//       "lazySocket": true,
//       "frontendVersion": "v1",
//       "showPoweredBy": true
//   });
// </script>
            window.botpressWebChat.init({
                "composerPlaceholder": "Chat with paramabot",
                "botConversationDescription": "This is chatbot",
                "botId": "4245372f-5902-4f69-abc3-17a8818f758b",
                "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
                "messagingUrl": "https://messaging.botpress.cloud",
                "clientId": "4245372f-5902-4f69-abc3-17a8818f758b",
                "lazySocket": true,
                "botName": "Parama Bot",
                "hideWidget": !isVerified,
                "stylesheet": "https://webchat-styler-css.botpress.app/prod/code/0d44c2c6-9e20-4034-a6ba-68c78534faf8/v42851/style.css",
                "frontendVersion": "v1",
                "useSessionStorage": false,
                "enableConversationDeletion": true 
            });
        }
        
    }
    useEffect(() => {
        initFunction()
        //eslint-disable-next-line
    }, [])

    return <div id="webchat" >
        
    </div>
}

export default ChatbotApp