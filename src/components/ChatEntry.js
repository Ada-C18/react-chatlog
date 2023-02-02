import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({id,sender,body,timeStamp,liked,onUpdateChat}) => {
  const updateLike = () => {
    onUpdateChat({
      id, 
      sender,
      body, 
      timeStamp, 
      liked : !liked
    })
  }
  const heartLiked = liked ? '❤️' : '🤍';
  let entryClass = ''

  if(sender === 'Vladimir'){
    entryClass = 'local';
  }else{
    entryClass = 'remote'; 
  }

  return (
    <div className={`chat-entry ${entryClass}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp}/></p>
        <button className = "like" onClick={updateLike}>{heartLiked}</button>
      </section>
    </div>
  )};
  


ChatEntry.propTypes = {
  //Fill with correct proptypes
  id: PropTypes.number,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool,
  onUpdateChat: PropTypes.func
};

export default ChatEntry;
