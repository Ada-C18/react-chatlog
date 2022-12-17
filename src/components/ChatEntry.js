import React, {useState} from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';


const ChatEntry = (props) => {
  const date1 = new Date(props.timeStamp) 
  const year = 2022 - date1.getFullYear()

  const [likes, setLikes] = useState(0)

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

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired
};

export default ChatEntry;
