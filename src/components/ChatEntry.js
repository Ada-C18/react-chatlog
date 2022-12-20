import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

// presentational

const ChatEntry = ({id, sender, body, timeStamp}) => {
  const time = <TimeStamp time={timeStamp} />;

  const entryClass = (id % 2 === 0)  ? 'remote' : 'local' ;
  
//   const counter = 0
//   let theHeart = '🤍';
//   function changeCounterHeart(inc) {
//     if (inc) {
//     updatePrice(bikeId, counter + 1);
//     } else {
//     updatePrice(bikeId, counter - 1);
//     }
// }

//   function getColorFromHeart(inc) {
//     let theHeart = '🤍';
//     if (price <= myBudget) {
//     return "green";
//     } else {
//     return "red";
//     }
  

  return (
    <div className={' chat-entry ' + entryClass}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">{time}</p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id:PropTypes.number,
  sender:PropTypes.string.isRequired,
  body:PropTypes.string.isRequired,
  timeStamp:PropTypes.any.isRequired
};

export default ChatEntry;
