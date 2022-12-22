import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import {useState} from 'react'; 


const ChatEntry = (props) => {
  const sender = props.sender;
  const body = props.body;
  const timeStamp = props.timeStamp;
  const entryId = props.id
  const updateLikeCount = props.updateLikeCount;
  


  
 
const [liked ,setLike] = useState(false)

  
const changeHearts = () => {
  if (liked === false) {
    setLike(true)
} else {
  setLike(false)
}
}
//setLike (!liked)
const Hearts =() => {
  updateLikeCount(!liked)
  changeHearts()
  console.log(liked)
  // updateLikeCount(liked)
  // console.log(liked)
   

}




  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"> <TimeStamp time = {timeStamp} ></TimeStamp></p>
        <button className="like" onClick =  {Hearts}>{(liked === false)? '🤍': '❤️'} </button> 
      </section>
    </div>
  );
};

//ternary operator if condition is true, first expression is executed




ChatEntry.propTypes = {
  sender:PropTypes.string.isRequired,
  body:PropTypes.string.isRequired,
  timeStamp:PropTypes.string.isRequired,
  updateLikeCount: PropTypes.func.isRequired,
  id:PropTypes.number.isRequired




};

export default ChatEntry;
