import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';


const ChatLog = ({entries}) => {
    return (
        <ul>
            {entries.map((message) => (
                <ChatEntry 
                    id={message.id}
                    sender={message.sender}
                    body={message.body}
                    timeStamp={message.timeStamp}
                    liked={message.liked}
                    key={message.id}>
                    </ChatEntry>
            ))}
        </ul>
    );
};

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            sender: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            liked: PropTypes.bool.isRequired,
            timeStamp: PropTypes.string.isRequired
        })
    ),
};


export default ChatLog;