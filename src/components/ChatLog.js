import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries, likeCountCallBack }) => {
  //   const messages = [
  //     {
  //       id: 1,
  //       sender: 'Vladimir',
  //       body: 'why are you arguing with me',
  //       timeStamp: '2018-05-29T22:49:06+00:00',
  //       liked: false,
  //     },
  //   ];
  //   console.log(messages);
  const chatLogComponents = entries.map((chatEntry) => {
    return (
      <div key={chatEntry.id}>
        <ChatEntry
          id={chatEntry.id}
          sender={chatEntry.sender}
          body={chatEntry.body}
          timeStamp={chatEntry.timeStamp}
          liked={chatEntry.liked}
          likeCountCallBack={likeCountCallBack}
        ></ChatEntry>
      </div>
    );
  });
  return (
    <section className="chat-log">
      {/* <ChatEntry></ChatEntry> */}
      {chatLogComponents}
    </section>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.object).isRequired,
  likeCountCallBack: PropTypes.func.isRequired,
};

export default ChatLog;
