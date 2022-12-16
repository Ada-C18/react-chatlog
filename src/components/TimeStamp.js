import { DateTime } from 'luxon';

const TimeStamp = (props) => {

  const time = DateTime.fromISO(props.time);
  const absolute = time.toFormat('MMMM Do YYYY, h:mm:ss a');
  const relative = time.toRelative();
  console.log(`in time stamp props ${props.timeStamp}`)
  console.log(`in tiem stamp ${time}`)

  return <span title={absolute}>{relative}</span>;
};

export default TimeStamp;
