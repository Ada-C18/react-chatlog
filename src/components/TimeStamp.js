import { DateTime } from 'luxon';

const TimeStamp = ({ timeStamp }) => {
  const time = DateTime.fromISO(timeStamp);
  const absolute = time.toFormat('MMMM Do YYYY, h:mm:ss a');
  const relative = time.toRelative();

  return (
    // Had to change span to div because CSS wasn't being applied properly
    <div className="entry-time" title={absolute}>
      {relative}
    </div>
  );
};

export default TimeStamp;
