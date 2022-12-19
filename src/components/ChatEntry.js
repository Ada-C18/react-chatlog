import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const yearsAgo = (string) => {
  const yearsAgo = 2022 - parseInt(string.slice(0, 4), 10);
  return yearsAgo;
};

const ChatEntry = (props) => {
  const onLikeButton = () => {
    const updatedEntry = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      timeStamp: props.timeStamp,
      liked: !props.liked
    };
    props.onLike(updatedEntry);
  };
  // const likedColor = props.isLiked ? 'red' : 'white';
  //  const [likesCount, setLikesCount] = useState(0);


  //  const increaseLikes = () => {
  //   console.log('liked')
  //   setLikesCount(likesCount+1);
  //  };

  
  // const likeColor = props.isLiked ? '❤️' : '🤍';

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          {yearsAgo(props.timeStamp)} {'years ago'}
        </p>
        <button className="likeColor" onClick={onLikeButton} >🤍</button>
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
  liked: PropTypes.bool,
  onLike: PropTypes.func.isRequired
  // onIsLiked: PropTypes.func.isRequired,
};

export default ChatEntry;
