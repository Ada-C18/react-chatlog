import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';


//chatdata before

const ChatLog = ({entries}) => {

    const chatComponents = entries.map((chat) => {
    return (
        <li key={chat.id}>
        <ChatEntry 
        sender={chat.sender} 
        body={chat.body} 
        timeStamp={chat.timeStamp}/>
        </li>
        )
    });
    return (
        <ul>
        {chatComponents}
        </ul>
    )
};

// ChatLog.chatComponents = {
//     entries:PropTypes.arrayOf(PropTypes.object).isRequired
// }

export default ChatLog;