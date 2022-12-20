import React from 'react';
import PropTypes from 'prop-types';
import './ColorChoice.css';

const ColorChoice = (props) => {
  const colorChoices = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
  const colorButtons = colorChoices.map((color) => {
    return <button className="button" id={color} key={color} ></button>
  })
  return <div>{colorButtons}</div>
}


ColorChoice.propTypes = {
  colorChoices: PropTypes.arrayOf(
    PropTypes.string.isRequired
  )

}
export default ColorChoice;