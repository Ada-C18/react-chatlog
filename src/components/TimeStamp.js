import { DateTime } from 'luxon';
import PropTypes from 'prop-types';

const TimeStamp = (props) => {
  
  const chatTime = DateTime.fromISO(props.time);
  const relative = chatTime.toRelative();

  return <span>{relative}</span>;
};

TimeStamp.propTypes = {
  time: PropTypes.string.isRequired,
}

export default TimeStamp;
