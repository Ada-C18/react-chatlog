import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = ({entries,updateLikes}) => {

    const chatEntrycomponents = entries.map((chats) =>{

    return (
        <li key={chats.id}>
            < ChatEntry sender={chats.sender} body={chats.body} timeStamp={chats.timeStamp} liked={chats.liked} updateLikes={updateLikes}/>
        </li>
    )
});

    return (
        <ul>
            {chatEntrycomponents}
        </ul>
    );


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
    updateLikes:PropTypes.func.isRequired,
};

export default ChatLog;