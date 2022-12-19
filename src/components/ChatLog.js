import React from 'react';
import ChatEntry from './ChatEntry';
import './ChatLog.css'


const ChatLog = ({ entries }) => {

    const chatEntryComponents = entries.map(entry => {
        return (
            <div key={entry.id}>
                <ChatEntry
                uniqueId={entry.id}
                sender={entry.sender}
                body={entry.body}
                timeStamp={entry.timeStamp}
            />
            </div>
        );
    });
    return (
        <div>{chatEntryComponents}</div>

    );

};

export default ChatLog;


// const ChatLog = ({ entries }) => {
//     const chatEntryComponents = entries.map((entry) => {
//         return (
//         <div>
//       {/* // <div><ChatEntry sender={entry.sender} body={entry.body} timeStamp={entry.timeStamp} /> </div> */}
//             <ChatEntry
//             key={entry.id}
//             sender={entry.sender}
//             body={entry.body}
//             timeStamp={entry.timeStamp}
//             liked={entry.liked}
//                     />
//         </div>
//     );
//     });

//     return <div>{chatEntryComponents}</div>;
// };