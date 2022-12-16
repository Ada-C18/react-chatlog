import React from 'react';
import './ChatEntry.css';
// import PropTypes from 'prop-types';


const ChatEntry = (props) => {
  const date1 = new Date(props.timeStamp) 
  const year = 2022 - date1.getFullYear()

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>
          {props.body}
        </p>
        <p className="entry-time">{`${year} years ago`}</p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

// ChatEntry.propTypes = {
//   sender: PropTypes.string,
//   body: PropTypes.string,
//   timeStamp: PropTypes.string
// };

export default ChatEntry;
