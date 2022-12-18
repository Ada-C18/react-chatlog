import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
// import { useState } from 'react';

// create a button that toggles liking a chat entry - add /subtract likes counter

const ChatEntry = ({ id, sender, body, timeStamp, liked, updateLiked }) => {
  // console.log(updateLiked);

  const updateLikedButtonToggle = () => {
    // let newliked = updateLiked(id);
    // console.log(`☹️${newliked}`);
    // console.log(`⬇️ ${id}`);
    const updatedChatEntry = {
      id: id,
      sender: sender,
      body: body,
      timeStamp: timeStamp,
      liked: updateLiked,
    };
    // console.log(`🐶 ${updatedChatEntry.id}`);
    // console.log(`🐱 ${updatedChatEntry}`);
    updateLiked(id, updatedChatEntry);
    console.log(`🐤 ${updatedChatEntry.liked}`);
  };

  // console.log(liked);
  const buttonStyle = liked ? '❤️' : '🤍';
  // const [buttonStyle, setButtonStyle] = useState('🤍');
  // function handleClick() {
  //   if (updateLiked === true) {
  //     setButtonStyle('❤️');
  //   } else {
  //     setButtonStyle('🤍');
  //   }

  return (
    <div className={`chat-entry ${sender === 'Vladimir' ? 'local' : 'remote'}`}>
      <h2 className="entry-name">{sender}</h2>

      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp}></TimeStamp>
        </p>
        <button className="like" onClick={() => updateLikedButtonToggle()}>
          {buttonStyle}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  // id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  // timeStamp: PropTypes.instanceOf(DateTime), pass as a string
  // liked: PropTypes.bool.isRequired,
};

export default ChatEntry;
