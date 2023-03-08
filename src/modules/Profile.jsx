import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './Profile.css';
import Quote from './submodules/Quote';
import profilePic from '../images/kevin_riley.png';

// Calculate age
const ageMS = Date.now() - new Date('10/11/1989').getTime();
const age = new Date(ageMS).getUTCFullYear() - 1970;

function Profile() {
  const description = "I'm a game designer, former professional gamer, software engineer, and gaming enthusiast. I love playing games, thinking about how they work, and getting good at them. My knowledge of different games is massive because my hunger for new games is insatiable and as a professional gamer, I spent thousands of hours trying to be the best possible. I can analyze your game in a way few people can and provide focused feedback to improve it as efficiently as possible.";

  return (
    <div id="profile">
      <Grid className="scroll-module">
        <h2 className="text-center">Profile</h2>
        <Quote
          quote="I know games."
        />
        <hr />
        <Row>
          <Col md={3}>
            <h3>Details</h3>
            <p>
              <strong>Name:</strong>
              <br />
              Kevin &ldquo;qxc&rdquo; Riley
            </p>
            <p>
              <strong>Age:</strong>
              <br />
              {age}
              {' '}
              years
            </p>
            <p>
              <strong>Location:</strong>
              <br />
              Los Angeles, California, USA
            </p>
            <p>
              <strong>Power Level:</strong>
              <br />
              Over 9000
            </p>
          </Col>
          <Col md={4} className="text-center">
            <img src={profilePic} alt="Kevin Riley" />
          </Col>
          <Col md={5}>
            <h3>About me</h3>
            <p>
              { description }
            </p>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default Profile;
