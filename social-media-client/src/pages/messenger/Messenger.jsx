import React from 'react';
import './messenger.css';
import Message from '../../components/message/Message'
import Conversation from '../../components/conversation/Conversation';
import Topbar from '../../components/topbar/Topbar';

function Messenger() {
  return (
    <>
      <Topbar />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input 
              className="chatMenuInput" 
              type="text" 
              placeholder="Search for friends" />
              <Conversation/>
              <Conversation/>
              <Conversation/>
              <Conversation/>
              <Conversation/>
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            <div className="chatBoxTop">
              <Message own={true}/>
              <Message/>
              <Message own={true}/>
              <Message/>
            </div>
            <div className="chatBoxBottom">
              <textarea className="chatMessageInput" name="" id="" placeholder="write something..." cols="30" rows="10"></textarea>
              <button className="chatSubmitButton" type="submit" onClick={() => console.log("Hi")}>send</button>
            </div>
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            chatonline
          </div>
        </div>
      </div>
    </>
  );
}

export default Messenger;
