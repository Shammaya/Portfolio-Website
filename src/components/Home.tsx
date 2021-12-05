import { Card, Container, ListGroup, Nav, Navbar } from "react-bootstrap";
import * as React from 'react';
import mechine_learning from './../assets/mechine_learning.jpg'

export default function Home({home}){
   return (
  <Container>
        <Card className="shadow-lg p-3 mb-5 bg-white rounded mt-5 mb-2">
    <Card.Body>
        <Card.Title>Personal Profile</Card.Title>
        <Card.Text>
            {home.profile}
        </Card.Text>
    </Card.Body>
    </Card>
    <Card className="shadow-lg p-3 mb-5 bg-white rounded mt-5 mb-2">
    <Card.Body>
        <Card.Title>Summary of Skills</Card.Title>
        <ListGroup variant="flush">
        <ListGroup.Item>Experience developing Web and Mobile Applications, Frameworks, and software</ListGroup.Item>
        <ListGroup.Item>Knowledge with HTML, CSS, JavaScript, Python, Objected-Oriented software concepts, business documentation, React, MongoDB, PHP</ListGroup.Item>
        <ListGroup.Item>Applications developed using Visual Studio Code, Microsoft Office, PyCharm</ListGroup.Item>
        <ListGroup.Item> Skilled in Computer applications like Microsoft Word, Office PowerPoint, Excel, Access and SQL</ListGroup.Item>
        <ListGroup.Item>Machine Learning Completion using No-Code approach using AZURE ML.</ListGroup.Item>
        <ListGroup.Item>Excellent problem solving, communication, analytical, teamwork, leadership, and work ethic.</ListGroup.Item>
        <ListGroup.Item>Fluent in English</ListGroup.Item> 
        </ListGroup>
    </Card.Body>
    </Card>
    
    <Card className="shadow-lg p-3 mb-5 bg-white rounded mt-5 mb-2">
    <Card.Body>
        <img src={mechine_learning} alt="mechine_learning" style={{width:'100%'}}/>
    </Card.Body>
    </Card>
  </Container>
);
}