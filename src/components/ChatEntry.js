import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const ChatEntry = ({ messages }) => {
  // const individualMessage = props.messages.map((message) => {
  //   return (
  //     <div className="chat-entry local">
  //       <h2 className="entry-name">{message.sender}</h2>
  //       <section className="entry-bubble">
  //         <p>{message.body}</p>
  //         <p className="entry-time">{message.timeStamp}</p>
  //         <button className="like">🤍</button>
  //       </section>
  //     </div>
  //   );
  // });
  return (
    <div className="chat-entry local">
      {messages.map((message) => {
        return (
          <div key={message.id}>
            <h2 className="entry-name">{message.sender}</h2>
            <section className="entry-bubble">
              <p>{message.body}</p>
              <p className="entry-time">{message.timeStamp}</p>
              <button className="like">🤍</button>
            </section>
          </div>
        );
      })}
    </div>
  );
};

ChatEntry.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ),
};

export default ChatEntry;
