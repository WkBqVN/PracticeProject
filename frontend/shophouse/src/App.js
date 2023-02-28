import logo from './logo.svg';
import './App.css';
import './css/Component.css';
import './css/Element.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import NotedListHouse from './components/left/NotedListHouse';
import FriendList from './components/right/FriendList';
import DashboardMain from './components/center/DashboardMain';
import NavbarMain from './components/top/NavbarTop';
import FooterBar from './components/bottom/FooterBar';

function App() {
  return (
    <div className="App">
      <NavbarMain name="navbar-main" />
      <Row className="row-element" style={{ width: "100%", marginTop: "45px" }}>
        <Col sm={10} >
          <Container fluid>
            <Row style={{ width: "100%" }}>
              <Col sm={1} style={{ background: "blue" }}>
                <NotedListHouse />
              </Col>
              <Col sm={11} style={{ background: "green" }}>
                <DashboardMain />
              </Col>
            </Row>
          </Container>
          <FooterBar />
        </Col>
        <Col sm={2} >
          <FriendList />
        </Col>
      </Row >
    </div >
  );
}

export default App;
