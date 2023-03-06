import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './Sale.css';
import Quote from './submodules/Quote';
// Images for Sale
import algoPic from '../images/algorithm.webp';

const portfolio = [{
  name: 'I\'m awesome',
  description: 'I\'m here to help you make games.',
  image: algoPic,
  style: { backgroundColor: 'orange' },
}];

let itemNum = 0;

function Sale() {
  return (
    <div id="sale">
      <Grid className="scroll-module">
        <h2 className="text-center">What This Is About</h2>
        <Quote
          quote="I'm here to help you make games'."
        />
        <hr />
        {portfolio.map((portfolioItem) => {
          itemNum += 1;
          if (itemNum % 2) {
            return (
              <Row key={`portfolio-item-${portfolioItem.name}`} className="portfolio-item-row">
                <Col sm={4} md={3}>
                  <div className="portfolio-item-image-container">
                    <img className="portfolio-item-image" src={portfolioItem.image} alt={portfolioItem.name} />
                    <div className="portfolio-item-image-background" style={portfolioItem.style} />
                  </div>
                </Col>
                <Col sm={8} md={9}>
                  <h3>{ portfolioItem.name }</h3>
                  <p>{ portfolioItem.description }</p>
                </Col>
              </Row>
            );
          }
          // else
          return (
            <Row key={`portfolio-item-${portfolioItem.name}`} className="portfolio-item-row">
              <Col sm={4} md={3} className="visible-xs-block">
                <div className="portfolio-item-image-container">
                  <img className="portfolio-item-image" src={portfolioItem.image} alt={portfolioItem.name} />
                  <div className="portfolio-item-image-background" style={portfolioItem.style} />
                </div>
              </Col>
              <Col sm={8} md={9}>
                <h3>{ portfolioItem.name }</h3>
                <p>{ portfolioItem.description }</p>
              </Col>
              <Col sm={4} md={3} className="hidden-xs">
                <div className="portfolio-item-image-container">
                  <img className="portfolio-item-image" src={portfolioItem.image} alt={portfolioItem.name} />
                  <div className="portfolio-item-image-background" style={portfolioItem.style} />
                </div>
              </Col>
            </Row>
          );
        })}
      </Grid>
    </div>
  );
}

export default Sale;
