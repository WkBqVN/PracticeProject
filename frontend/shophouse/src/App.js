import logo from './logo.svg';
import './App.css';
import  NavbarMain  from './components/NavbarMain';
import HouseCard from './components/HouseCard';

import 'bootstrap/dist/css/bootstrap.min.css';
import NotedListHouse from './components/NotedListHouse';

function App() {
  return (
    <div className="App">
      <NavbarMain name = "red"/>
      <HouseCard />
      <NotedListHouse />
    </div>
  );
}

export default App;
