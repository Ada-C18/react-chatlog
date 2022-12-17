import ChatEntry from './ChatEntry'

const Chatlog = (props) =>{
  return (
  <>
  <ul>{props.chatMessages.map((entries,i)=>(
    <ChatEntry
    sender={entries.sender}
    body={entries.body}
    timeStamp= {entries.timeStamp}
    />
    ))}
      <ChatEntry/>
      <ChatEntry/>
    </ul> 
    </>
  )
}

export default Chatlog