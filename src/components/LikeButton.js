import React from 'react';
import { useState } from 'react';
import './LikeButton.css';
import PropTypes from 'prop-types';

const LikeButton = (props) => {
  const [isLiked, setLiked] = useState(props.liked);
  const toggleLike = () => {
    setLiked(!isLiked);
  };
  let [likedClass, likedIcon] = isLiked
    ? ['like liked', '❤️']
    : ['like unliked', '🤍'];
  return (
    <button className={likedClass} onClick={toggleLike}>
      {likedIcon}
    </button>
  );
};

LikeButton.propTypes = {
  liked: PropTypes.bool.isRequired,
};

export default LikeButton;
