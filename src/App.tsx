
import { useState } from 'react'

import './App.css'
import { MessagesContainer } from './components/chat/messages_container.tsx'
import { ChatInputContainer } from './components/chat/chat_bar.tsx'
import { ChatList } from './components/chatlist/chat_list.tsx'

function App() {
  const [messages, setMessages] = useState<{ message: string, who: string }[]>([])


 
  //Save new messages and keeps the old ones (session), USER AND AI
  const SaveNewMessage = (message: any ,  who: string ) => {
    setMessages((messages)=>[...messages, {message: message, who: who === 'user' ? 'user' : 'ai'}])
  }

  return (
    <div className='page'>
      <ChatList/>
      <div className="container-chatgroup">
        <MessagesContainer messages={messages}/>
        <ChatInputContainer send={SaveNewMessage}/>
      </div>
    </div>
  )
}

export default App






































