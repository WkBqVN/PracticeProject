import logo from './logo.svg';
import './App.css';

import NavbarMain from './components/NavbarMain';
import HouseCard from './components/HouseCard';
import NotedList from './components/NotedList';
import FriendList from './components/FriendList';
import HouseList from './components/HouseList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App" style={{ display: "inline-block", width: "100%" }}>
      <div style={{ width: "80%" }}>
        <NavbarMain name="red" />
        <div style={{ display: "inline-block" }} class="row">
          <div style={{ width: "20%" }}>
            <NotedList />
          </div>
          <div style={{ width: "60%" }}>
            <HouseCard />
            <HouseCard />
          </div>
          <div>
            <HouseList />
          </div>
        </div>
      </div>
      <div style={{ width: "20%" }}>
        <FriendList />
      </div>
    </div >
  );
}

export default App;
