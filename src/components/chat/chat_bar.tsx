import React from 'react'

export function ChatInputContainer(props: any){


    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
  
      e.preventDefault()
  
      const inputElement = document.querySelector('.inputaichat') as HTMLInputElement | null;
  
      if (!inputElement) return
      if (inputElement.value.length === 0) return
      
      //add to messages list
      props.send(inputElement.value,'user')
      
      
      //send message to gpt
      sendMessageToAPI(inputElement.value)
      
      
      
      inputElement.value = ''
    }


    
    function sendMessageToAPI(message: string){
      fetch('http://localhost:3000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({message: message})
      })
      .then(res => res.json())
      .then(data => {
        props.send(data.message,'ai')
  
      })
      .catch(err => console.log(err))
    }
  
    
  
    return (
      <form onSubmit={handleSubmit} className='chat-input-component'>
        <div className="chat-input-elements-container">
          <input className='inputaichat' type="text" placeholder='Send message'/>
          <button type='submit'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="logo-send">
            <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
          </svg>
          </button>
        </div>
      </form>
    )
  }