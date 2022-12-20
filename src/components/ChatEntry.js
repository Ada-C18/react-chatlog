import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  const chatEntryId = props.id;
  const chatEntrySender = props.sender;
  const chatEntryBody = props.body;
  const chatEntryTimeStamp = props.timeStamp;
  const chatEntryLiked = props.liked;
  // const updateLiked = props.updateLiked;
  // const deleteChatEntry = props.deleteChatEntry;

  // function updateLiked(inc) {
  //   //inc is a boolean flag representing if we are increasing price or decreasing it
  //   if (inc) {
  //     //ChatEntryPrice += 1 WRONG
  //     updatePrice(ChatEntryId, ChatEntryPrice + 1);
  //   } else {
  //     updatePrice(ChatEntryId, ChatEntryPrice - 1);
  //   }
  // }

  // function getColorFromPrice(price) {
  //   let myBudget = 100;
  //   if (price <= myBudget) {
  //     return "green";
  //   } else {
  //     return "red";
  //   }
  // }

  // return (
  // <div>
  //   <h2 className="ChatEntry__name">{ChatEntryName}</h2>
  //   <ul>
  //     <li>{ChatEntrySender}</li>
  //     <li>{ChatEntryBody}</li>
  //     <li>{ChatEntryTimeStamp}</li>
  //     <li><button
  //     onClick={() => {
  //       changeChatEntryPrice(true);
  //     }}
  //   >{ChatEntryLiked}</button></li>
  //   </ul>
  //   {/* <button onClick={() => deleteChatEntry(ChatEntryId)}>Delete</button> */}
  // </div>
  // );

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{chatEntrySender}</h2>
      <section className="entry-bubble">
        <p>{chatEntryBody}</p>
        <p className="entry-time">{chatEntryTimeStamp}</p>
        <button className="like">🤍</button>
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
};

export default ChatEntry;
