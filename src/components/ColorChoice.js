import React from 'react';
import PropTypes from 'prop-types';
import './ColorChoice.css';

const ColorChoice = (props) => {
  const colorChoices = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
  const inputButtons = colorChoices.map((color) => {
    return <input key={color} type="radio" className={color}></input>
  })
  return <div>{inputButtons}</div>
}


ColorChoice.propTypes = {
  colorChoices: PropTypes.arrayOf(
    PropTypes.string.isRequired
  )

}
export default ColorChoice;