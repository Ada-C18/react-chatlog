import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const ColorButton = (props) => {
  const color = props.color;
  const icon = props.icon;
  const updateColor = props.updateColor;

  const changeColor = () => {
    console.log('handleCliked on colorButton called');
    updateColor();
  };

  return (
    // <section>
    <button className={color} onClick={changeColor}>
      {icon}
    </button>
    // </section>
  );
};

ColorButton.propTypes = {
  color: PropTypes.string.isRequired,
  icon: PropTypes.string,
  updateColor: PropTypes.func,
};

export default ColorButton;
