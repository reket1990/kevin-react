import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './Pay.css';

function Pay() {
  return (
    <div id="pay">
      <Grid className="scroll-module">
        <h2 className="text-center">Pay Me Please :)</h2>
        <hr />
        <Row>
          <Col lg={6}>
            <a className="link" href="xxx" target="_blank" rel="noopener noreferrer">
              <span className="fa fa-paypal" />
              {' '}
              xxx
            </a>
          </Col>
          <Col lg={6}>
            <span className="link">
              <span className="fa fa-vimeo-square" />
              {' '}
              Venmo: @Kevin-Riley-22
            </span>
          </Col>
          <Col lg={6}>
            <span className="link">
              <span className="fa fa-university" />
              {' '}
              Zelle: xxx
            </span>
          </Col>
        </Row>
        <hr className="bottom-line" />
      </Grid>
    </div>
  );
}

export default Pay;
