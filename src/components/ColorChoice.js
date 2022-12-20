import PropTypes from 'prop-types';
import './ColorChoice.css';

const ColorChoice = (props) => {
  return (
    <span>
      {/* <p>{props.sender}</p> */}
      <p>Name goes here</p>
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
  // color: PropTypes.string.isRequired,
};

export default ColorChoice;
