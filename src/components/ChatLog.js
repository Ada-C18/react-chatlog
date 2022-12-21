import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({entries}) => {
    const messagesComponents  = entries.map((message) => {
                return (
                    <div >
                        <ChatEntry 
                                key={message.id}
                                id = {message.id}
                                sender={message.sender}
                                body={message.body}
                                timeStamp={message.timeStamp}
                                liked={message.liked} ></ChatEntry>
                    </div>
                )
            })
            return (
                <div> {messagesComponents} </div>
                
            )};    

ChatLog.propTypes = {
    chatLogData: PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number,
            sender: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            timeStamp: PropTypes.string.isRequired,
            liked:PropTypes.bool.isRequired,
            likesCountCallBack: PropTypes.func.isRequired,
        })
    ),
};
export default ChatLog;