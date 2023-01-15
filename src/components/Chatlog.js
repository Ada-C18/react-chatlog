import React from 'react';
import './Chatlog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  return (
    <div className="chat-entry">
      <h2 className="from-sender">Vladimir</h2>
      <section className="entry-bubble">
        <p>why are you arguing with me</p>
        <p className="entry-time">"2018-05-29T22:49:06+00:00"</p>
        <button className="like">🤍</button>

        <h2 className="from-sender">Estragon</h2>
        <p class="entry-bubble">"Because you are wrong."</p>
        <p className="entry-time">"2018-05-29T22:49:33+00:00"</p>

        <h2 className="from-sender">Vladimir</h2>
        <p class="entry-bubble">"because I am what"</p>
        <p className="entry-time">"2018-05-29T22:50:22+00:00"</p>

        <h2 className="from-sender">"Estragon</h2>
        <p class="entry-bubble">"A robot.""</p>
        <p className="entry-time">"2018-05-29T22:52:21+00:00"</p>

        <h2 className="from-sender">Vladimir</h2>
        <p class="entry-bubble">"how did you know""</p>
        <p className="entry-time">"2018-05-29T22:52:58+00:00"</p>

        <h2 className="from-sender">"Estragon</h2>
        <p class="entry-bubble">"A robot.""</p>
        <p className="entry-time">"2018-05-29T22:52:21+00:00"</p>
      </section>
    </div>
  );
};

ChatLog.propTypes = {
  message: PropTypes.arrayOf(
    PropTypes.shape({
      messageContent: PropTypes.string.isRequired,
    })
  ),
};
