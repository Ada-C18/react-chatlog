// import { useState } from 'react';
import PropTypes from 'prop-types';
// cuteness level
// name, age
// breed

const Chat = (props) => {
    // const [petCount, setPetCount] = useState(0);

    // const handleOnClickPets = () => {
    //     setPetCount((petCount) => petCount + 1);
    // }
    // props.key => value
    return (
        <div className="chat-entry local">
          <h2 className="entry-name">name: {props.sender}</h2>
          <section className="entry-bubble">
            <p>message: {props.body}</p>
            <p className="entry-time">time: {props.timeStamp}</p>
            <button className="like">🤍</button>
          </section>
        </div>
      );
}

Chat.propTypes = {
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp:PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired,
  };


export default Chat;