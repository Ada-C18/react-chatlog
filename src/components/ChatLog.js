import React from 'react';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import chatMessages from '../data/messages.json';


const ChatLog = (props) => {
  const entries = chatMessages.map((entry, i) => {
    return <ChatEntry
    key={i} 
    id={entry.id}
    sender={entry.sender}
    body={entry.body}
    timeStamp={entry.timeStamp}
    liked={entry.liked}
    />
  })
  return (<div>
      <div>
        {entries}
      </div>
    </div>);
};


// ChatLog.propTypes = {
//   chatMessages: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     sender:  PropTypes.string.isRequired,
//     body: PropTypes.string.isRequired,
//     timeStamp: PropTypes.number.isRequired,
//     // petCount: PropTypes.number.isRequired,
//   })),
//   // onPetDog: PropTypes.func.isRequired,
//   onUnregister: PropTypes.func.isRequired
// };


export default ChatLog;