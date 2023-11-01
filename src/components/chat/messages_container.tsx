import MessageCard from "./message_card"

export function MessagesContainer(props: any){
    return (
      <div className='message-container-component'>
        <div className="message-container">
          {
            props.messages.reverse().map((message: {message: any, who:string}, index:number) => {
              return(
                <MessageCard key={index} who={{sender:message.who, index, length: props.messages.length-1}} message={message.message}/>
              )
            })
          }
        </div>
      </div>
    )    
}


