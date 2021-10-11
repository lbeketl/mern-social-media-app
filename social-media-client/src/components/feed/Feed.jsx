import { useState, useEffect } from 'react';
import axios from 'axios';
import './feed.css';
import Share from '../share/Share';
import Post from '../post/Post';
import { Posts } from '../../dummyData';

function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
   const fetchPosts = async () => {
    const res = username 
    ? await axios.get("posts/profile" + username)
    : await axios.get("posts/timeline/6154b4c3b7bca571b9c190c3");
    setPosts(res.data);
   };
   fetchPosts();
  }, [username]);
  
  return (
    
    <div className="feed"> 
      <div className="feedWrapper">
        <Share/>
        { posts.map(post => {
           return <Post key={post._id}  post={post} />
        })}
      </div>
    </div>
  )
}

export default Feed
