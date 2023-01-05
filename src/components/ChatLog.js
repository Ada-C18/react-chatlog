import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';


const ChatLog = (props) => {
  const formattedMessages = props.entries.map(entry => {

    //check if user is local or not
    const user = (entry.sender === props.localUser) ? 'local' : 'remote';

    return (
      <div key={entry.id}>
        <ChatEntry
          id={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          liked={entry.liked}
          onLike={props.onLike}
          userType={user} />
      </div>
    )
  }
  );
  return (formattedMessages);
};


ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired
  })),
  localUser: PropTypes.string.isRequired,
  onLike: PropTypes.func.isRequired
}

export default ChatLog;