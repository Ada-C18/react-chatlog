import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
    const chatEntryComponents = props.entries.map(chat => {
        return (<ChatEntry
        id={chat.id}
        sender={chat.sender}
        body={chat.body}
        timeStamp={chat.timeStamp}
        liked={chat.liked}
        onUpdate= {props.onUpdateMessage}
        onVerify={props.onVerifySender}
        />);
    });



    return (
        <section>
            {chatEntryComponents}
        </section>
    )
};

ChatLog.propTypes = {
    //Fill with correct proptypes
    entries: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        sender: PropTypes.string,
        body: PropTypes.string,
        timeStamp: PropTypes.string,
        liked: PropTypes.bool,
    })),
    onUpdateMessage: PropTypes.func,
    onVerifySender: PropTypes.func
}

export default ChatLog;