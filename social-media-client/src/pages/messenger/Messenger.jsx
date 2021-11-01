import React from 'react';
import './messenger.css';
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
              placeholder="Search for friends"  />
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            box
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
