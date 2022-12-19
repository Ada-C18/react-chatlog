import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import messages from './src/data/messages.json';

let entries = [];

messages.forEach((message) => {
    const entry = <ChatEntry sender=message.sender body=message.body timeStamp=message.timeStamp />
    ChatLog.push(entry)
});

return { entries }

export default ChatLog;
