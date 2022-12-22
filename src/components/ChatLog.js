
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
        const entries = props.entries;
    return(
        <div className="chat-log">
            {
                entries.map((entry, id) => (
                    <ChatEntry
                        id={entry.id}
                        sender={entry.sender}
                        body={entry.body}
                        timeStamp={entry.timeStamp}
                        updateLikes={props.updateLikes}
                        key={id}
                    />
                )
            )}
        </div>
    )
};
ChatLog.propTypes = {
    entries: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            sender: PropTypes.string.isRequired,
            body:PropTypes.string.isRequired,
            timeStamp:PropTypes.string.isRequired
        })
    ),
    updateLikes:PropTypes.func.isRequired
}
export default ChatLog;