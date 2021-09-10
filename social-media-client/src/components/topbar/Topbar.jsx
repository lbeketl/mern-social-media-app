import './topbar.css';
import { Search} from '@material-ui/icons';

function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">My Social</span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search/>
          <input className="searchInput" type="text" placeholder="Search for friends, post or video" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarlink">Homepage</span>
          <span className="topbarlink">Timeline</span>
        </div>
        <div className="topbarIcons">
          
        </div>
      </div>
    </div>
  )
}

export default Topbar
