import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './About.css';
import Quote from './submodules/Quote';
// Images for About
import aePic from '../images/aeons_end.png';

const about = [{
  name: 'I\'m awesome',
  description: 'I\'m here to help you make games.',
  image: aePic,
  style: { backgroundColor: 'orange' },
}];

let itemNum = 0;

function About() {
  return (
    <div id="about">
      <Grid className="scroll-module">
        <h2 className="text-center">What This Is About</h2>
        <Quote
          quote="I'm here to help you make games'."
        />
        <hr />
        {about.map((aboutItem) => {
          itemNum += 1;
          if (itemNum % 2) {
            return (
              <Row key={`about-item-${aboutItem.name}`} className="about-item-row">
                <Col sm={4} md={3}>
                  <div className="about-item-image-container">
                    <img className="about-item-image" src={aboutItem.image} alt={aboutItem.name} />
                    <div className="about-item-image-background" style={aboutItem.style} />
                  </div>
                </Col>
                <Col sm={8} md={9}>
                  <h3>{ aboutItem.name }</h3>
                  <p>{ aboutItem.description }</p>
                </Col>
              </Row>
            );
          }
          // else
          return (
            <Row key={`about-item-${aboutItem.name}`} className="about-item-row">
              <Col sm={4} md={3} className="visible-xs-block">
                <div className="about-item-image-container">
                  <img className="about-item-image" src={aboutItem.image} alt={aboutItem.name} />
                  <div className="about-item-image-background" style={aboutItem.style} />
                </div>
              </Col>
              <Col sm={8} md={9}>
                <h3>{ aboutItem.name }</h3>
                <p>{ aboutItem.description }</p>
              </Col>
              <Col sm={4} md={3} className="hidden-xs">
                <div className="about-item-image-container">
                  <img className="about-item-image" src={aboutItem.image} alt={aboutItem.name} />
                  <div className="about-item-image-background" style={aboutItem.style} />
                </div>
              </Col>
            </Row>
          );
        })}
      </Grid>
    </div>
  );
}

export default About;
