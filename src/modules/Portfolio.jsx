import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './Portfolio.css';
import Quote from './submodules/Quote';
// Images for Portfolio
import algoPic from '../images/algorithm.webp';
import gamesPic from '../images/gamecube-controller.png';
import cardsPic from '../images/cards.webp';

const portfolio = [{
  name: 'Aeons End',
  description: 'Aeon\'s End is a cooperative game that explores the deckbuilding genre with a number of innovative mechanisms, including a variable turn order system that simulates the chaos of an attack, and deck management rules that require careful planning with every discarded card. Players will struggle to defend Gravehold from The Nameless and their hordes using unique abilities, powerful spells, and, most importantly of all, their collective wits.',
  image: algoPic,
  style: { backgroundColor: 'orange' },
},
{
  name: 'Kodama Forest',
  description: 'In Kodama Forest, everyone works with their neighbors to cover as much of their shared player boards as possible. Every round, each player places one tile on the board to their right and one tile on the board to their left. Forests are penalized for every uncovered dirt section and the game ends when one board has covered all of its “5” and “10” dirt spaces. Players score both of their shared boards, with the lowest combined score determining the winner.',
  image: gamesPic,
  style: { backgroundColor: 'yellowgreen' },
},
{
  name: 'Sapphiro',
  description: 'Dazzling gems are the focus of your quest in Sapphiro. Play your diamond tiles to capture rubies, emeralds, and other valuable jewels by matching colors and surrounding the gems. Be careful not to leave a quick or easy way for your opponents to do the same. Be the first to collect one jewel of each color to win.',
  image: cardsPic,
  style: { backgroundColor: '#666' },
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
                  <img className="portfolio-item-image" src={portfolioItem.image} alt="{interest.name}" />
                  <div className="portfolio-item-image-background" style={portfolioItem.style} />
                </div>
              </Col>
              <Col sm={8} md={9}>
                <h3>{ portfolioItem.name }</h3>
                <p>{ portfolioItem.description }</p>
              </Col>
              <Col sm={4} md={3} className="hidden-xs">
                <div className="portfolio-item-image-container">
                  <img className="portfolio-item-image" src={portfolioItem.image} alt="{interest.name}" />
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
