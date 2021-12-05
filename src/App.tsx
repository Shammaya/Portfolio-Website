import { Container, Row } from "react-bootstrap";
import Particles from "react-tsparticles";
import "./App.css";
import Navigation from "./components/Navigation";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Education from "./components/Education";
import Projects from "./components/Projects";
import { Zidane } from "./portfolios/zidane";
import ContactMe from "./components/ContactMe";
import ThankYou from "./components/ThankYou";
import React from 'react';

export default function App() {
  const user=Zidane;
  return (<>
    <Particles 
      id={"particles-js"}
      params={{
        fpsLimit: 30,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#000",
          },
          links: {
            color: "#555",
            distance: 150,
            enable: true,
            opacity: 0.7,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 1000,
            },
            value: 60,
          },
          opacity: {
            value: 0.7,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
      }}
    />
        <Navigation user={user}/>
        
       <Routes>
        <Route path={"/"} element={    <Home home={user.home}/>     } />
        <Route path={"/education"} element={         <Education user={user}/>} />
        <Route path={"/projects"} element={         <Projects user={user}/>} />
        <Route path={"/contact-me"} element={         <ContactMe user={user}/>} />
        <Route path={"/thank-you"} element={         <ThankYou user={user}/>} />
      </Routes>

   <footer>  
   <p className={"text-center"}>
     &copy; Copyright 2021 Zidane </p>
   </footer>
   </>
  )
}