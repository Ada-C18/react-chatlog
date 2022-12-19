import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp'


// ****** wave 2 ******
const ChatEntry = ({key, id, sender, body, timeStamp, liked}) => {


// ****** wave 1 ******
// const ChatEntry = ()=>{
  
//   const id = 1;
//   const sender = "Joe Biden";
//   const body = "Get out by 8am.  I'll count the silverware";
//   const timeStamp= "2018-05-18T22:12:03Z";


  return (
    <div className="chat-entry local" id={id} >
     
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">{2022-(timeStamp.slice(0,4))} years ago
        {/* <TimeStamp timeStamp ={timeStamp}/> */}
        </p>
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