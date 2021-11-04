import React from 'react';
import './message.css';

function Message({ own }) {
  return (
    <div className={own ? "message own" : "message"} >
      <div className="messageTop">
        <img 
          className="messageImg"
          src="https://image.freepik.com/free-photo/portrait-beautiful-young-woman-standing-grey-wall_231208-10760.jpg" 
          alt="" 
         />
         <p className="messageText">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere quos voluptatibus dicta autem dolores sequi, quo praesentium iste porro? Nemo molestiae molestias quae error laboriosam corrupti id inventore, ea iste!</p>
      </div>
      <div className="messageBottom">
        1 hour ago
      </div>
    </div>
  )
}

export default Message
