import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp'
import chatMessages from '../data/messages.json';

// const ChatEntry = (props) => {
//   const id = props.id;
//   const sender = props.Sender;
//   const body = props.Body;
//   const timeStamp= props.TimeStamp;
//   const liked= props.liked;


const ChatEntry = ()=>{
  
  const id = 1;
  const sender = "Joe Biden";
  const body = "Get out by 8am.  I'll count the silverware";
  const timeStamp= "2018-05-18T22:12:03Z";


  return (
    <div className="chat-entry local" id={id} >
     
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">{timeStamp.slice(0,4)} years ago</p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};


ChatEntry.propTypes = {
  ChatEntry: PropTypes.arrayOf(
      PropTypes.shape({
          id: PropTypes.number.isRequired,
          sender: PropTypes.string.isRequired,
          body: PropTypes.string.isRequired,
          timeStamp: PropTypes.string.isRequired,
          liked: PropTypes.bool.isRequired,
      })
  ),
}


export default ChatEntry;