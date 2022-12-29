import React from 'react';
import ColorButton from './ColorButton';
import PropTypes from 'prop-types';

const ColorButtons = ({ colorsData, updateColor }) => {
  const ColorButtonsComponents = colorsData.map((colorButton) => {
    return (
      <ColorButton
        key={colorButton.color}
        color={colorButton.color}
        icon={colorButton.icon}
        updateColor={updateColor}
      ></ColorButton>
    );
  });

  return <div>{ColorButtonsComponents}</div>;
};

ColorButtons.propTypes = {
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.string.isRequired,
      color: PropTypes.string,
    })
  ),
  updateColor: PropTypes.func,
};

export default ColorButtons;
