import './share.css';
import { PermMedia } from '@material-ui/icons';

function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
          <input className="shareinput" type="text" placeholder="What's in your mind Safak?" />
        </div>
        <hr className="shareHr" />
        <div className="shareButton">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia/>
              <span className="shareOptionText">Photo or Video</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Share;
