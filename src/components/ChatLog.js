import React from 'react';
import ChatEntry from './ChatEntry';
import './ChatLog.css'
import PropTypes from 'prop-types';

const ChatLog = ({ entries, updateLikes }) => {

    const chatEntryComponents = entries.map(entry => {
        return (
            <div key={entry.id}>
                <ChatEntry
                uniqueId={entry.id}
                sender={entry.sender}
                body={entry.body}
                timeStamp={entry.timeStamp}
                liked={entry.liked}
                updateLikes={updateLikes}
            />
            </div>
        );
    });
    return (
        <div>{chatEntryComponents}</div>

    );

}

// Add prop types for entries and the also what each entry contains
ChatLog.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.shape({
        sender: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        timeStamp: PropTypes.string.isRequired,
        uniqueId: PropTypes.number,
        // uniqueId: PropTypes.number.isRequired,
        liked: PropTypes.bool.isRequired,
        updateLikes: PropTypes.func
    })).isRequired,
}

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