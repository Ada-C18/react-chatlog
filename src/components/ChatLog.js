import ChatEntry from './ChatEntry'

const ChatLog = (props) =>{
  return (
  <div>

  {props.entries.map((entries,i)=>(
    <ChatEntry
      sender={entries.sender}
      body={entries.body}
      timeStamp= {entries.timeStamp}
      liked={entries.liked}
      id={entries.id}
      key={i}
      setUpdateHeartLikes= {props.setUpdateHeartLikes}

    />
    ))}
    
    </div>
  )
}

export default ChatLog