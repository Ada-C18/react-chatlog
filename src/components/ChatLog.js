import PropTypes from 'prop-types'
import ChatEntry from './ChatEntry.js';

function ChatLog( { updateChatLog, entries } ){
    const chatComponents = [];
    const updateChatLogProp = updateChatLog

    for (const chat of entries) {
        chatComponents.push(
            <li key={chat.id}>
                <ChatEntry 
                    id={chat.id} 
                    sender={chat.sender} 
                    body={chat.body} 
                    timeStamp={chat.timeStamp} 
                    liked={chat.liked}
                    updateChatLog={updateChatLogProp}
                />
            </li>
        )
    }

 return(
    <div>
        {chatComponents}
    </div>
    //returns [<Bike/>, <Bike/>]
 );
}

ChatLog.propTypes = {
    chatLog: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            sender: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            timestamp: PropTypes.string.isRequired,
        })
    ), updateChatLog:PropTypes.func.isRequired
}

export default ChatLog;