import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './Portfolio.css';
import Quote from './submodules/Quote';
// Images for Portfolio
import aePic from '../images/aeons_end.png';
import kodamaPic from '../images/kodama.png';

const portfolio = [{
  name: 'Aeons End',
  description: 'Aeon\'s End is a cooperative deck-builder that is ranked in the top 100 of all board games on boardgamegeek.com that I designed, found a publisher for and successfully created a franchise out of. Aeon\'s End has been releasing new content via kickstarter every year since 2016.',
  image: aePic,
  style: { backgroundColor: 'orange' },
},
{
  name: 'Kodama Forest',
  description: 'Kodama Forest is a semi-cooperative tiling game I designed where players work together with each of their neighbors to cover their board with tiles as efficiently as possible.',
  image: kodamaPic,
  style: { backgroundColor: 'yellowgreen' },
}];

let itemNum = 0;

function Portfolio() {
  return (
    <div id="portfolio">
      <Grid className="scroll-module">
        <h2 className="text-center">Portfolio</h2>
        <Quote
          quote="I make games."
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

export default Portfolio;
