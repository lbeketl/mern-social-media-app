import './post.css';
import { MoreVert } from '@material-ui/icons';

function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src="/assets/person/1.jpeg" alt="" />
            <span className="postUsername">John Travolta</span>
            <span className="postDate"> 5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert/>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est autem atque iure perferendis minus doloremque ducimus maiores soluta esse id quaerat commodi rem facilis magni sunt, doloribus eveniet eaque eum?</span>
          <img className="postImg" src="/assets/post/1.jpeg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="/assets/like.png" alt="" />
            <img className="likeIcon" src="/assets/heart.png" alt="" />
            <span className="postLikeCounter">33 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText"> 9 comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
