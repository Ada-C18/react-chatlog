import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';


const ChatLog = ({entries,updateIsLiked}) => {
   
    const chatComponents = entries.map((chat) => {
    return (
        <div key={chat.id}>
        <ChatEntry 
        id={chat.id}
        sender={chat.sender} 
        body={chat.body} 
        timeStamp={chat.timeStamp}
        liked={chat.liked}
        updateIsLiked={updateIsLiked}/>
        </div>
        );
    });
    return (
        <div>
        {chatComponents}
        </div>
    )
};

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number,
            sender:PropTypes.string.isRequired,
            body:PropTypes.string.isRequired,
            timeStamp:PropTypes.string.isRequired,
            liked:PropTypes.bool.isRequired,
})      
    ),
    updateIsLiked:PropTypes.func.isRequired,

};
// ChatLog.chatComponents = {
//     entries:PropTypes.arrayOf(PropTypes.object).isRequired
// }

export default ChatLog;