import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './Profile.css';
import Quote from './submodules/Quote';
import profilePic from '../images/kevin_riley.png';

// Calculate age
const ageMS = Date.now() - new Date('10/11/1989').getTime();
const age = new Date(ageMS).getUTCFullYear() - 1970;

function Profile() {
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
              Kevin Riley
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
              I know games in a way few people do because I love playing new games and I love
              getting good at games. I was a professional Starcraft 2 player for many years.
              After that, I&apos;ve pursued high achievements in many different games, some in
              competitive games against other players and some in purely player vs AI experiences.
              Because I&apos;ve spent so much of my life involved directly in playing games, I pick
              up new games quickly and can provide design insight quickly regarding many facets of
              a game ranging from difficulty, UI, presentation and more. I also worked as a
              Software Engineer for 1.5 years and studied CS in college so I have an appreciation
              for programming.
            </p>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default Profile;
