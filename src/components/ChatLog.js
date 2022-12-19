import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';


const ChatLog = (props) =>{
    const chatMessagesData = props.entries.map((message, i) => {  
        return <ChatEntry
        key={i}
        // id={message.id}
        sender={message.sender}
        body={message.body}
        timeStamp={message.timeStamp}
        liked={message.liked}
        />
    });
    return (<div>
        <div>{chatMessagesData}</div>
        </div>
        );
}

ChatLog.propTypes = {
    chatEntries: PropTypes.arrayOf(PropTypes.shape({
        // id: PropTypes.number.isRequired,
        sender: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        timeStamp:PropTypes.string.isRequired,
        liked: PropTypes.bool.isRequired

    }))

};


export default ChatLog