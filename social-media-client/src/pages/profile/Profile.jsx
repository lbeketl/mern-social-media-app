import './profile.css';
import Topbar from '../../components/topbar/Topbar.jsx';
import Sidebar from '../../components/sidebar/Sidebar.jsx';
import Feed from '../../components/feed/Feed.jsx';
import Rightbar from '../../components/rightbar/Rightbar.jsx';

function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src="assets/post/3.jpeg" alt="" />
              <img className="profileUserImg" src="assets/person/7.jpeg" alt="" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName"> Vasyl Yatsyshyn</h4>
              <span className="profileInfoDesc">
                Hello my friends
              </span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
