import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {

  const indChat = {
    id: props.id,
    sender: props.sender,
    body: props.body,
    timeStamp: props.timeStamp,
    liked: props.liked
  };


  const messageLocation = props.onVerify(indChat) ? 'chat-entry remote': 'chat-entry local';



  const onLikeButtonClick = () => {
    const updatedMessage = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      timeStamp: props.timeStamp,
      liked: !props.liked
    };
    props.onUpdate(updatedMessage);
  };
  

  const likeColor = props.liked ? '❤️':'🤍'; 
  
  return (
    // <div className='chat-entry local'>
    <div className={messageLocation}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp}></TimeStamp>
        </p>
        <button
        className="like"
        onClick={onLikeButtonClick}
        >{likeColor}</button>
      </section>
    </div>
  );
};



ChatEntry.propTypes = {
    //Fill with correct proptypes
  id: PropTypes.number,
  sender: PropTypes.string,
  body: PropTypes.string,
  timeStamp: PropTypes.string,
  liked: PropTypes.bool,
  onUpdate: PropTypes.func,
  onVerify: PropTypes.func
};

export default ChatEntry;
