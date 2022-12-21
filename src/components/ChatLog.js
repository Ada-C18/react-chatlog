import ChatEntry from './ChatEntry';

const ChatLog = (props) => {

    const chatComponents = props.entries.map(entry => {
        return (
            <div key={entry.id}>
                <ChatEntry 
                id={entry.id} 
                sender={entry.sender} 
                body={entry.body} 
                timeStamp={entry.timeStamp} 
                liked={entry.liked} 
                toggleLike={props.toggleLike}>
                </ChatEntry>
            </div>
        );
    });

    return (
        <section>
            <ul>
                {chatComponents}
            </ul>
        </section>
    );
};





export default ChatLog;