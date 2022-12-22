import { DateTime } from 'luxon';

const TimeStamp = (props) => {
  const time = DateTime.fromISO(props.time);
  const absolute = time.toFormat('MMMM Do, h:mm:ss a');
  const relative = time.toRelative();

  return <span title={relative}>{absolute}</span>;
};

export default TimeStamp;
