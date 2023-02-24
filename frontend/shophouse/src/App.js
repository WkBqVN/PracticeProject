import logo from './logo.svg';
import './App.css';
import NavbarMain from './components/NavbarMain';
import HouseCard from './components/HouseCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';



import 'bootstrap/dist/css/bootstrap.min.css';
import NotedListHouse from './components/NotedListHouse';

function App() {
  return (
    <div className="App">
      <NavbarMain name="navbar-main" />
      <Row style={{width:"100%"}}>
        <Col sm={10}>
          <Container fluid>
            <Row>
              <Col sm={2} style={{ background: "blue" }} >
                <NotedListHouse />
              </Col>
              <Col sm={10} style={{ background: "black" }}>
                <HouseCard />
              </Col>
            </Row>
          </Container>
        </Col>
        <Col sm={2} style={{ background: "lime" }}>
          <h2>asdf</h2>
        </Col>
      </Row>
    </div>
  );
}

export default App;
