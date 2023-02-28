import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import testImg from '../../data/dummydata/house1.jpeg'
import Container from 'react-bootstrap/Container';
import houseData from '../../data/dummydata/dummydata.json'

const MAX_DISPLAY_NOTED_HOUSE = 4
const MAX_STORED_NOTED_HOUSE = 15
function NotedListHouse() {
    // houseIndex is set default by useState(0 -> house index array start from 0)
    const [houseIndex, setHouse] = useState(0);
    const [startHouseNotedIndex, setStartHouseNotedIndex] = useState(0);
    let houseData = getDataFromAPI()
    return (
        generateList(houseData)
    )
}

function generateList(data) {
    console.log(data.houses)
    let listHouse = data.houses.map(houseObj => {
        return (
            <li className="noted-house-card-class" key={data.houses.indexOf(houseObj)}>
                <Card style={{ width: "100%" }}>
                    <Card.Img variant="top" src={testImg} />
                    <Card.Body>
                        <Card.Title>{houseObj.houseName}</Card.Title>
                        <Card.Text>{houseObj.housePrice}</Card.Text>
                        {generateBtns()}
                    </Card.Body>
                </Card>
            </li>
        )
    })
    console.log(listHouse)
    return (
        <ul id="noted-house-card-list">
            <div>
                {listHouse}
            </div>
        </ul>
    )
}
let generateBtns = () => {
    return (
        <div>
            <Row style={{ display: "inline-block" }}>
                <Button style={{width:"30%",height:"25px"}} variant="primary">+</Button>
                <Button style={{width:"30%",height:"25px"}} variant="primary">+</Button>
                <Button style={{width:"30%",height:"25px"}} variant="primary">+</Button>
            </Row>
        </div>
    )
}
function getDataFromAPI() {
    var dataNotedHouse = require('../../data/dummydata/dummydata.json')
    return dataNotedHouse
}

export default NotedListHouse
