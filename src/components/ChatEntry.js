import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp'

const ChatEntry = (props) => {
  console.log('b',props)
  const id = props.id;
  const chatSender = props.Sender;
  const chatBody = props.Body;
  const chatTimeStamp= props.TimeStamp;
  // const liked= props.liked;

  return (
    <div className="chat-entry local">
      {/* console.log('chatSender', {chatSender}) */}
      <h2 className="entry-name">{chatSender}</h2>
      <section className="entry-bubble">
        <p>{chatBody}</p>
        <p className="entry-time">{chatTimeStamp}</p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};


ChatEntry.propTypes = {
  ChatEntry: PropTypes.arrayOf(
      PropTypes.shape({
          id: PropTypes.number.isRequired,
          chatSender: PropTypes.string.isRequired,
          chatBody: PropTypes.string.isRequired,
          chatTimeStamp: PropTypes.string.isRequired,
          liked: PropTypes.bool.isRequired,
      })
  ),
}


export default ChatEntry;