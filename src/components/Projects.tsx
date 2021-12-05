import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Card, Container, Nav, Navbar } from "react-bootstrap";
import logo from './../logo.svg';
import pygame from './../assets/pygame.png';
import reaction_game from './../assets/reaction_game.png';
import snake_game from './../assets/snake_game.png';
import React from 'react';;

export default function Projects({user}){

     const WorkIcon =()=>{
        return (
            <img src={logo} alt='image'/>
        );
    }

     const SchoolIcon =()=>{
        return (
            <img src={logo} alt='image'/>
        );
    }

     const StarIcon =()=>{
        return (
            <img src={logo} alt='image'/>
        );
    }

   return (
       
  <Container>
      
<VerticalTimeline lineColor='#333'>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{boxShadow: '5px 0px 20px 10px #eceec ' }}
    contentArrowStyle={{ borderRight: '7px solid black' }}
    date="2018 - 2021"
    iconStyle={{ background: 'red', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Pythong Game App </h3>
    <h4 className="vertical-timeline-element-subtitle py-1">Python, Pygame</h4>
    <div>
        <div>
        <img style={{objectFit:'contain', width: '100%'}}  src={pygame} alt='pygame'/>
        </div>
        Project Link: <a  href="https://replit.com/@ZidaneDrozario/Pythong-Game-App">https://replit.com/@ZidaneDrozario/Pythong-Game-App</a>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{boxShadow: '5px 0px 20px 10px #ecebec ' }}
    contentArrowStyle={{ borderRight: '7px solid  black' }}
    date="2020 - 2019"
    iconStyle={{ background: '#000', color: 'black' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Reaction Game</h3>
    <h4 className="vertical-timeline-element-subtitle py-1">Javascript, CreateJs</h4>
    <div>
    <div>
      <img style={{objectFit:'contain', width: '100%'}}  src={reaction_game} alt='reaction_game'/>
      </div>
      Project Link: <a  href="https://reactionwebgame.zidanedrozario.repl.co">https://reactionwebgame.zidanedrozario.repl.co</a>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
  className="vertical-timeline-element--work"
  contentStyle={{boxShadow: '5px 0px 20px 10px #ecebec ' }}
  contentArrowStyle={{ borderRight: '7px solid  black' }}
  date="2019 - 2018"
  iconStyle={{background: 'rgb(33, 150, 243)', color: 'rgb(255, 255, 255)' }}
  icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Snake Game </h3>
    <h4 className="vertical-timeline-element-subtitle py-1">Javascript, CreateJs</h4>
    <div>
    <div>
        <img style={{objectFit:'contain', width: '100%'}}  src={snake_game} alt='snake_game'/>
        </div>
        Github Link: <a  href="https://github.com/Lenard-Lu/Super-Snake ">https://github.com/Lenard-Lu/Super-Snake </a>
    </div>
  </VerticalTimelineElement>
</VerticalTimeline>
  </Container>
);
}