import './profile.css';
import Topbar from '../../components/topbar/Topbar.jsx';
import Sidebar from '../../components/sidebar/Sidebar.jsx';
import Feed from '../../components/feed/Feed.jsx';
import Rightbar from '../../components/rightbar/Rightbar.jsx';

function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
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
              <h4 className="profileInfoName"> Vasyl Yatsyshyn</h4>
              <span className="profileInfoDesc">
                Hello my friends
              </span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile={PF} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
