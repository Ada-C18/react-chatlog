import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  return (
    <>
      <ul>
        {props.entries.map((chat) => (
          <ChatEntry
            sender={chat.sender}
            body={chat.body}
            timeStamp={chat.timeStamp}
          />
        ))}
      </ul>
    </>
  );
};

// ChatLog.propTypes = {
//   chatData: PropTypes.arrayOf(
//     PropTypes.shape({
//       sender: PropTypes.string.isRequired,
//       id: PropTypes.number.isRequired,
//       body: PropTypes.string.isRequired,
//       timeStamp: PropTypes.string.isRequired,
//     })
//   ),
// };

export default ChatLog;
