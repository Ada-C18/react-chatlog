import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const toggleLiked = () => {
    console.log('Im inside of toggleLiked');
    console.log(`id = ${props.id}`);
    console.log(`sender = ${props.sender}`);
    console.log(`liked = ${props.liked}`);

    const updatedMessage = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      timeStamp: props.timeStamp,
      liked: !props.liked,
    };
    props.onUpdate(updatedMessage);
    console.log(`updatedMessage is liked? ${updatedMessage.liked}`);
  };

  const heartGraphic = props.liked ? '❤️' : '🤍';

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        <button onClick={toggleLiked} className="like">
          {heartGraphic}
        </button>{' '}
        {/*onClick={toggleLiked}*/}
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool,
  onUpdate: PropTypes.func.isRequired,
};

export default ChatEntry;
