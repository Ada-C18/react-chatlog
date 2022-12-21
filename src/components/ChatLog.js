import ChatEntry from './ChatEntry';





const ChatLog = (props) => {

    const chatComponents = props.entries.map(entry => {
        return (
            <li  key={entry.id}><ChatEntry sender={entry.sender} body={entry.body} timeStamp={entry.timeStamp} data={props.data}></ChatEntry></li>
    
        );
       

    })


    return (
        <section>
            <ul>
                {chatComponents}
            </ul>
        </section>
    )
};





export default ChatLog;