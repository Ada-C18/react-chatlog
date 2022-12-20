import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  // const messages = props.chatData.map((message, i) => {
  //   return <Chat
  //   key={i}
  //   sender={message.sender}
  //   body={message.body}
  //   timeStamp={message.timeStamp}
  //   liked={message.liked}
  //   />
  // })
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">name: {props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.id}</p>
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp:PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
};

export default ChatEntry;
