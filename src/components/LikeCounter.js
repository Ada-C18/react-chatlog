import React from 'react'
import './LikeCounter.css'
import PropTypes from 'prop-types';

const LikeCounter = (props) => {
    return <div className='like-counter'> {props.count} ❤️s</div>
}

LikeCounter.propTypes = {
    count:PropTypes.number
  };

export default LikeCounter