import './share.css';
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons';
import axios from 'axios';

function Share() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);
  const desc = useRef();
  const [file, setFile] = useState(null);

  const submitHandler = async e => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      
      try {
        await axios.post("/upload", data);
      } catch (error) {
        
      }
    }

    try {
      await axios.post("/posts", newPost);
    } catch (error) {
      
    }
  }



  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src={user.profilePicture ? PF + user.profilePicture : PF + "person/noAvatar.png"} alt="" />
          <input
             className="shareInput"
             type="text" 
             placeholder={"What's in your mind " + user.username + "?"}
             ref={desc} 
          />
        </div>
        <hr className="shareHr" />
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <label className="shareOption" htmlFor="file">
              <PermMedia htmlColor="tomato" className="shareIcon"/>
              <span className="shareOptionText">Photo or Video</span>
              <input
                style={{display: "none"}} 
                type="file"
                name="" 
                id="file" 
                accept=".png, .jpeg, .jpg"
                onChange={(e) => e.target.files[0]}
                />
            </label>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon"/>
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon"/>
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
}

export default Share;
