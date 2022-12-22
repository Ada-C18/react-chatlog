import { DateTime } from 'luxon';

const TimeStamp = (props) => {
  const time = DateTime.fromISO(props.time);
  const absolute = time.toFormat('MMMM Do YYYY, h:mm:ss a');
  const relative = time.toRelative();
  console.log(TimeStamp('2018-05-29T22:49:33+00:00'));

  return <span title={absolute}>{relative}</span>;
};

export default TimeStamp;
