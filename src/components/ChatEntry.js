import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  return (
    <main>
      <section>
        <h2>SENDER</h2>
        <p>MESSAGE TEXT</p>
        <p>TIME STAMP</p>
      </section>
    </main>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
};

export default ChatEntry;

ChatEntry.propTypes = {
  message: PropTypes.arrayOf(
    PropTypes.shape({
      messageContent: PropTypes.number.isRequired,
    })
  ),
};

// const ChatEntry = (props) => {
//   const timeStamp = newDate.return(props.timeStamp)
//     <div>
//       <h2 className="sender">{props.sender}</h2>
//       <p className="body">{props.body}</p>
//       <p className="timeStamp">TIME STAMP</p>
//       {/* `sender`, `body`,  and `timeStamp` */}
//     </div>
//     <button onclick="myFunction()">Click me</button>
//   );
// };
