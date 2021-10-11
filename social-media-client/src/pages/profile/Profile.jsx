import './profile.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Topbar from '../../components/topbar/Topbar.jsx';
import Sidebar from '../../components/sidebar/Sidebar.jsx';
import Feed from '../../components/feed/Feed.jsx';
import Rightbar from '../../components/rightbar/Rightbar.jsx';

function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=john`);
      setUser(res.data);
    };
    fetchUser();
  }, []);

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src={`${PF}post/3.jpeg`} alt="" />
              <img className="profileUserImg" src={`${PF}person/7.jpeg`} alt="" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">
               {user.desc}
              </span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username="john"/>
            <Rightbar profile={PF} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
