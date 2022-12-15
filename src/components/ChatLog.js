import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';


const ChatLog = ({chatData}) => {
    const chatComponents = chatData.map((chat) => {
    return (
        <div key={chat.id}>
        <ChatEntry 
        sender={chat.sender} 
        body={chat.body} 
        timeStamp={chat.timeStamp}/>
        </div>
        )
    });
    return (
        {chatComponents}
    )
};

ChatLog.chatComponents = {
    chatData:PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ChatLog;