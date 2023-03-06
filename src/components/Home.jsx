import React from 'react';
import { Jumbotron, Grid } from 'react-bootstrap';
import './Home.css';
import Navigation, { smoothScroll } from '../modules/Navigation';
import Profile from '../modules/Profile';
import Experiences from '../modules/Experiences';
import Portfolio from '../modules/Portfolio';
import Sale from '../modules/Sale';
import Skills from '../modules/Skills';
import Contact from '../modules/Contact';
import Footer from '../modules/Footer';

function scrollDown() {
  smoothScroll('portfolio');
}

function Home() {
  return (
    <div>
      <Jumbotron>
        <Grid>
          <h1>KR Games</h1>
          <hr />
          { /* eslint-disable-next-line max-len */ }
          <p>We specialize in bringing your gaming ideas to life. With years of experience in the industry, our team of experts is here to guide you through every step of the game design process, from concept development to final product release.</p>
        </Grid>
        <button onClick={scrollDown} className="scroll-down">
          <span className="glyphicon glyphicon-chevron-down" />
        </button>
      </Jumbotron>
      <Navigation />
      <Portfolio />
      <Sale />
      <Profile />
      <Experiences />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
