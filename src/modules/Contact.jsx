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
          quote="I can make your game better."
        />
        <hr />
        <Row>
          <Col lg={6}>
            <a href="https://www.linkedin.com/in/kevin-riley-a275528/" target="_blank" rel="noopener noreferrer">
              <span className="fa fa-linkedin-square" />
              {' '}
              www.linkedin.com/in/kevin-riley-a275528
            </a>
          </Col>
          <Col lg={6}>
            <a href="mailto:k.riley08@gmail.com">
              <span className="fa fa-envelope-square" />
              {' '}
              k.riley08@gmail.com
            </a>
          </Col>
        </Row>
        <hr className="bottom-line" />
      </Grid>
    </div>
  );
}

export default Contact;
