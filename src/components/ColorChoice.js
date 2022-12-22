import PropTypes from 'prop-types';
import './ColorChoice.css';

const ColorChoice = (props) => {
  return (
    <span>
      <button onClick={() => props.setColorCallback('red')}>🔴</button>
      <button onClick={() => props.setColorCallback('orange')}>🟠</button>
      <button onClick={() => props.setColorCallback('yellow')}>🟡</button>
      <button onClick={() => props.setColorCallback('green')}>🟢</button>
      <button onClick={() => props.setColorCallback('blue')}>🔵</button>
      <button onClick={() => props.setColorCallback('purple')}>🟣</button>
    </span>
  );
};

ColorChoice.propTypes = {
  setColorCallback: PropTypes.func.isRequired,
};

export default ColorChoice;
