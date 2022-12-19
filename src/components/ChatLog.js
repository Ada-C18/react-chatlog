import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
    const chatComponents = props.entries.map((entry, index) => {
        return (
            <li key={index}><ChatEntry sender={entry.sender} body={entry.body} timeStamp={entry.timeStamp}></ChatEntry></li>
        );
    });

    return (
        <section>
            <ul>
                {chatComponents}
            </ul>
        </section>
    )
}

export default ChatLog;