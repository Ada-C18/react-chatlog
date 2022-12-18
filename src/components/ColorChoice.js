import React from 'react';
import PropTypes from 'prop-types';

const ColorChoice = (props) => {
  // const colorChoices = ['red'...'green'];
  const buttons = props.colorChoices.map((color) => {
    return <button className={color}></button>
  })
  return <div>{buttons}</div>
}


ColorChoice.propTypes = {
  colorChoices: PropTypes.arrayOf(
    PropTypes.string.isRequired
  )
  
}
export default ColorChoice;