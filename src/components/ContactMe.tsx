import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Card, Container, Form, Nav, Navbar, Button } from "react-bootstrap";
import logo from './../logo.svg';
import React from 'react';

export default function ContactMe({user}){
   return (
       
  <Container className="align-items-center">
        <Card  className="shadow-lg p-3 mb-5 bg-white rounded mt-5 mb-2">
        <Card.Body>

            <Card.Title>Contact Me</Card.Title>
<Form action="https://formsubmit.co/zidanedrozario@yahoo.com" method="POST">
        <input type="hidden" name="_next" value="https://elementarywiserelationaldatabase.zidanedrozario.repl.co/contact-me"/>
        <Form.Group className="mb-3">
        <Form.Label>Name: </Form.Label>
        <Form.Control type="text" name="name" id="name" placeholder="Enter name" required />
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label>Email: </Form.Label>
        <Form.Control email="text" name="email" id="email" placeholder="Enter email" required/>
        </Form.Group>
        <Form.Label>Comment: </Form.Label>
        <Form.Group className="mb-3">
        <Form.Control required
      as="textarea" name="comment"
      placeholder="Leave a comment here" id="cmessage"
      style={{ height: '100px' }}
    /></Form.Group>
     <Button variant="primary" type="submit">Send</Button>
</Form>
</Card.Body>
                </Card>
  </Container>
);
}