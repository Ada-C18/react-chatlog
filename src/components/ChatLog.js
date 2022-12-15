import ChatEntry from './ChatEntry';

const ChatLog = ({entries}) => {

const chatEntrycomponents = entries.map((chats) =>{

    return (
        <li key={chats.id}>
            < ChatEntry sender={chats.sender} body={chats.body} timeStamp={chats.timeStamp}/>
        </li>
    )
});

return (
    <ul>
        {chatEntrycomponents}
    </ul>
);


};


export default ChatLog;