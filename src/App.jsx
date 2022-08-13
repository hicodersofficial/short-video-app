import "./App.css";
import ShortContainer from "./components/ShortContainer";

function App() {
  return (
    <div>
      <nav className="navbar">
        <div className="nav">
          <div className="logo-container">
            <img src="/logo192.png" className="logo" alt="" />
          </div>

          <div className="search-container">
            <input
              type="text"
              className="search"
              placeholder="Search accounts and videos"
            />
            <span></span>
            <button>
              <ion-icon name="search-outline"></ion-icon>
            </button>
          </div>

          <ul>
            <li>
              <ion-icon name="notifications-outline"></ion-icon>
            </li>
            <li>
              <img
                src="https://images.unsplash.com/photo-1507438222021-237ff73669b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
                alt=""
              />
            </li>
          </ul>
        </div>
      </nav>
      <main className="main">
        <aside>
          <ul className="user-nav">
            <li className="active">
              <ion-icon name="home-outline"></ion-icon>
              <span>For You</span>
            </li>
            <li>
              <ion-icon name="planet-outline"></ion-icon>
              <span>Explore</span>
            </li>
            <li>
              <ion-icon name="videocam-outline"></ion-icon>
              <span>Live</span>
            </li>
            <li>
              <ion-icon name="people-outline"></ion-icon>
              <span>Following</span>
            </li>
          </ul>
          <ul className="nav-help">
            <li>
              <ion-icon name="settings-outline"></ion-icon>
              <span>Settings</span>
            </li>
            <li>
              <ion-icon name="help-circle-outline"></ion-icon>
              <span>Help</span>
            </li>
            <li>
              <ion-icon name="flag-outline"></ion-icon>
              <span>Report</span>
            </li>
            <li>
              <ion-icon name="chatbox-outline"></ion-icon>
              <span>Send Feedback</span>
            </li>
          </ul>

          <footer>
            <small>© 2022 hicoders</small>
          </footer>
        </aside>
        <ShortContainer />
      </main>
    </div>
  );
}

export default App;
