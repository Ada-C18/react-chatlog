import React from 'react';
import PropTypes from 'prop-types';
// import { useState } from 'react';
import './post.css';
const Post = (props) => {
  // const [likeCount, setLikeCount] = useState(0);

  return (
    <section>
      <p className="top">{props.likeCount} 🤍s</p>
      {/* <button onClick={updateLikes}>🤍</button> */}
    </section>
  );
};

Post.propTypes = {
  likeCount: PropTypes.number.isRequired,
};

export default Post;
