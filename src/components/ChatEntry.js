import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';


const ChatEntry = (id, body, sender, timeStamp, liked, updateMessage) => {
  const handlingLike = () => {
    const updatedMessage = {
      id: id,
      body: body,
      sender: sender,
      timeStamp: timeStamp,
      liked: liked,
    };
    updateMessage(updatedMessage);
  }

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp}></TimeStamp>
        </p>
        <button onClick={handlingLike} className="like">
          {liked === false ? '🤍': '💜'}</button>
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
      liked: PropTypes.bool.isRequired,
      updateMessage: PropTypes.func.isRequired,
    };

  

export default ChatEntry;
