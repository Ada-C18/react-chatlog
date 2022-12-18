import React from 'react';
import './ColorChoice.css';
import PropTypes from 'prop-types';




const ColorChoice = (props) => {

  return (
    <div className='colorPickers'>
      <span className='remote'>
        <button onClick={() => props.onSetColorCallback('yellow')}>💛 </button>
        <button onClick={() => props.onSetColorCallback('green')}>💚 </button>
        <button onClick={() => props.onSetColorCallback('blue')}>💙 </button>
        <button onClick={() => props.onSetColorCallback('purple')}>💜 </button>
        <button onClick={() => props.onSetColorCallback('orange')}>🧡</button>
      </span>
      <span className='local'>
        <button>❤️ </button>
        <button>💛 </button>
        <button>💚 </button>
        <button>💙 </button>
        <button>💜 </button>
        <button>🖤</button>
        <button>🧡</button>
      </span>
    </div>)
  

  
};

ColorChoice.propTypes = {
  onSetColorCallback: PropTypes.func.isRequired
}

export default ColorChoice;
