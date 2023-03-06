import React from 'react';
import { Grid } from 'react-bootstrap';
import './Experiences.css';
import Experience from './submodules/Experience';
// Images for resume
import muddIcon from '../images/icon-mudd.jpg';
import appLovinIcon from '../images/icon-applovin.jpg';

const educations = [{
  icon: muddIcon,
  name: 'Harvey Mudd College',
  start_date: 'August 2008',
  end_date: 'May 2012',
  title: 'Bachelor of Science',
  description: 'Computer Science',
  location: 'Claremont, CA',
  website: 'https://www.hmc.edu',
}];

const careers = [{
  icon: appLovinIcon,
  name: 'Applovin',
  start_date: 'November 2019',
  end_date: 'June 2021',
  title: 'Software Engineer II',
  description:
    '• Responsible for maintaining tools to help designers modify design data including a Google Sheets add-on\n'
    + '• Tools were used internally, mostly run via cmdline or jenkins\n'
    + '• Created and maintained custom library for interacting with Perforce via nodejs\n'
    + '• Maintained pipeline in node js, php, and lua that transformed raw game data into a format used by the game.\n'
    + '• Maintained validation system for game data\n'
    + '• Led effort to identify and then convert especially slow validators from lua to nodejs\n'
    + '• Successfully led effort to transition company from using xlsx to csv files\n'
    + '• Wrote tools to interact with google API including sheets, calendar and drive in node & python',
  location: 'Palo Alto, CA',
  website: 'https://www.applovin.com',
}];

class Experiences extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  render() {
    const { show } = this.state;
    if (show === false) {
      return (
        <div id="experiences">
          <Grid className="scroll-module">
            <p className="showMore" onClick={() => this.setState({ show: true })}>Show More</p>
          </Grid>
        </div>
      );
    }

    return (
      <div id="experiences">
        <Grid className="scroll-module">
          <h3>Education</h3>
          {educations.map((education) => <Experience key={`education-${education.name}`} entry={education} />)}
          <hr />
          <h3>Career</h3>
          {careers.map((career) => <Experience key={`career-${career.name}`} entry={career} />)}
        </Grid>
      </div>
    );
  }
}

export default Experiences;
