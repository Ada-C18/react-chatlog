import React from "react";
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

// Implement a `ChatLog` component and update the `App` component to display an entire chat log. `ChatLog` should display a sequence of individual `ChatEntry` components.

// `ChatLog` takes one prop named `entries` (which is an array).



const ChatLog = (entries) => {
    const chats = entries.map((entry) => {
      return (<ChatEntry
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}

    }