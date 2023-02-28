import React from 'react';
import { Grid } from 'react-bootstrap';
import './Skills.css';
import Quote from './submodules/Quote';
import SkillPair from './submodules/SkillPair';

const languages = [{
  name: 'English',
},
{
  name: 'Chinese - Teo Chew',
},
{
  name: 'Vietnamese',
},
{
  name: 'Chinese - Mandarin',
}];

// Group skills in pairs
const groupPairs = (input) => {
  const output = [];
  Object.keys(input).forEach((index) => {
    if (index % 2 === 1) {
      // Add pair
      output.push([input[index - 1], input[index]]);
    } else if (index == input.length - 1) { // eslint-disable-line eqeqeq
      // Add last single element
      output.push([input[index], { name: '', value: '' }]);
    }
  });
  return output;
};

const languagePairs = groupPairs(languages);

function Skills() {
  return (
    <div id="skills">
      <Grid className="scroll-module">
        <h2 className="text-center">Breadth of Play</h2>
        <Quote
          quote="I play games."
        />
        <hr />
        <h3>Languages</h3>
        {languagePairs.map(([language1, language2]) => <SkillPair key={`language-${language1.name}-${language2.name}`} entry1={language1} entry2={language2} />)}
      </Grid>
    </div>
  );
}

export default Skills;
