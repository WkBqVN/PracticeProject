import React from 'react'
import HouseCard from '../basecomponents/HouseCard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import HouseInfo from './HouseInfo';
import HouseLiveChat from './HouseLiveChat';
import HouseNoted from './HouseNoted';

// this class will use at main screen

function DashboardMain() {
    return (
        <Container fluid>
            <div className="dashboard-main" style={{ width: "100%" }}>
                <Row>
                    <Col sm={6}>
                        <HouseInfo />
                    </Col>
                    <Col sm={6}>
                        <HouseLiveChat />
                        <Row>
                            <HouseNoted />
                        </Row>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default DashboardMain
