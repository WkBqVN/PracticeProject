import logo from './logo.svg';
import './App.css';
import  NavbarMain  from './components/NavbarMain';
import HouseCard from './components/HouseCard';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavbarMain name = "red"/>
      <HouseCard />
    </div>
  );
}

export default App;
