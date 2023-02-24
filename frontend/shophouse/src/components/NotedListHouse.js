import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import testImg from '../data/dummydata/house1.jpeg';
//import "../data/dummydata/dummydata.json" 

var dataNotedHouse = require('../data/dummydata/dummydata.json')
const MAX_DISPLAY_NOTED_HOUSE = 4
const MAX_STORED_NOTED_HOUSE = 15
function NotedListHouse() {
    // houseIndex is set default by useState(0 -> house index array start from 0)
    const [houseIndex, setHouse] = useState(0);
    const [startHouseNotedIndex, setStartHouseNotedIndex] = useState(0);
    return (
        generateList(dataNotedHouse)
    )
}

function generateList(data) {
    console.log(data.houses)
    let listHouse = data.houses.map(houseObj => {
        return (
            <li key={data.houses.indexOf(houseObj)}>
                <Card style={{ width: "10%", height: "15%" }}>
                    <Card.Img variant="top" src={testImg} />
                    <Card.Body>
                        <Card.Title>{houseObj.houseName}</Card.Title>
                        <Card.Text>{houseObj.housePrice}</Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </li>
        )
    })
    console.log(listHouse)
    return (
        <ul id="noted-house-list" style={{height: "80%", background:"orange[]"}}>
            {listHouse}
        </ul>
    )
}

export default NotedListHouse