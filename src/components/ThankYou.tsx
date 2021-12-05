import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Card, Row, Col, Container, Form, Nav, Navbar, Button } from "react-bootstrap";
import logo from './../logo.svg';
import React from 'react';
const mystyle = {
  display:'flex',
  'align-items':'center'
};
export default function ThankYou({user}){
   return (
       <Container>
    <Card className="mt-5 mb-2 text-center align-middle shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
            <Card.Title>Thank You For Your Feekback!</Card.Title>
            
            <Card.Link href="/">Back To Home Page</Card.Link>
        </Card.Body>
      </Card>
</Container>

);
}