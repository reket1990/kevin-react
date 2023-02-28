import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './Contact.css';
import Quote from './submodules/Quote';

function Contact() {
  return (
    <div id="contact">
      <Grid className="scroll-module">
        <h2 className="text-center">Contact</h2>
        <Quote
          quote="I'm open for communication."
        />
        <hr />
        <Row>
          <Col lg={6}>
            <a href="https://www.linkedin.com/in/richard-truong/" target="_blank" rel="noopener noreferrer">
              <span className="fa fa-linkedin-square" />
              {' '}
              www.linkedin.com/in/richard-truong
            </a>
          </Col>
          <Col lg={6}>
            <a href="mailto:richard_truong@hmc.edu">
              <span className="fa fa-envelope-square" />
              {' '}
              richard_truong@hmc.edu
            </a>
          </Col>
        </Row>
        <hr className="bottom-line" />
      </Grid>
    </div>
  );
}

export default Contact;
