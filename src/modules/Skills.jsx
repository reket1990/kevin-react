import React from 'react';
import { Grid, Carousel } from 'react-bootstrap';
import './Skills.css';
import Quote from './submodules/Quote';
import SkillPair from './submodules/SkillPair';
import Stats from './submodules/Stats';
// Images for Carousel
import qxc1Pic from '../images/qxc1.jpg';
import qxc2Pic from '../images/qxc2.jpg';
import mastersPic from '../images/masters.jpg';

const breadth = [
  {
    name: '7000+ Hours',
    games: [{
      name: 'StarCraft 2',
    }, {
      name: 'starcraft2.com/en-us/profile/1/1/2735594',
    }],
  },
  {
    name: '3000+ Hours',
    games: [{
      name: 'League of Legends',
    }, {
      name: 'www.op.gg/summoners/na/qxc',
    }],
  },
  {
    name: '1200+ Hours',
    games: [{
      name: 'Destiny 2',
    }, {
      name: 'raid.report/pc/4611686018468430152',
    }],
  },
  {
    name: '800+ Hours',
    games: [{
      name: 'Path of Exile',
    }, {
      name: 'Super Smash Bros. Melee',
    }],
  },
  {
    name: '300+ Hours',
    games: [{
      name: 'New World',
    },
    {
      name: 'Xcom 2',
    },
    {
      name: 'Hearthstone',
    },
    {
      name: 'Heroes of the Storm',
    },
    {
      name: 'Diablo 2',
    },
    {
      name: 'Counter-Strike Source',
    }],
  },
  {
    name: '150+ Hours',
    games: [{
      name: 'Diablo 3',
    },
    {
      name: 'Slay the Spire',
    },
    {
      name: 'Xcom: Enemy Unknown',
    },
    {
      name: 'The Cycle: Frontier',
    },
    {
      name: 'Overwatch',
    },
    {
      name: 'Guilty Gear Strive',
    },
    {
      name: 'Warcraft 3',
    },
    {
      name: 'Guitar Hero 3',
    }],
  },
  {
    name: '50+ Hours',
    games: [{
      name: 'Lost Ark',
    },
    {
      name: 'Dota Underlords',
    },
    {
      name: 'Teamfight Tactics',
    },
    {
      name: 'Civilization V',
    },
    {
      name: 'Europa Universalis IV',
    },
    {
      name: 'Age of Empires IV',
    },
    {
      name: 'Witcher 3',
    },
    {
      name: 'Company of Heroes',
    },
    {
      name: 'Offworld Trading Company',
    },
    {
      name: 'Monster Train',
    },
    {
      name: 'Factorio',
    },
    {
      name: 'Marvel Snap',
    },
    {
      name: 'Team Fortress 2',
    },
    {
      name: 'Super Smash Bros. Ultimate',
    },
    {
      name: 'Beat Saber',
    }],
  },
  {
    name: '20+ Hours',
    games: [{
      name: 'Left 4 dead 2',
    },
    {
      name: 'Battle Brothers',
    },
    {
      name: 'Counter-Strike GO',
    },
    {
      name: 'Valorant',
    },
    {
      name: 'Dungeon Defenders',
    },
    {
      name: 'Stellaris',
    },
    {
      name: 'Monster Hunter World',
    },
    {
      name: 'Prismata',
    },
    {
      name: 'They are Billions',
    },
    {
      name: 'Stardew Valley',
    },
    {
      name: 'Civilization 6',
    },
    {
      name: 'Gunfire Reborn',
    },
    {
      name: 'Wargroove',
    },
    {
      name: 'Back 4 Blood',
    },
    {
      name: 'HunieCam Studio',
    },
    {
      name: 'Vampire Survivors',
    },
    {
      name: 'Othercide',
    },
    {
      name: 'Darkest Dungeon',
    },
    {
      name: 'Battlerite',
    },
    {
      name: 'Dark Souls',
    },
    {
      name: 'Orcs Must Die 2',
    },
    {
      name: 'Defender\'s Quest',
    },
    {
      name: 'Supreme Commander 2',
    },
    {
      name: 'Street Fighter IV',
    },
    {
      name: 'Monaco',
    },
    {
      name: 'Starbound',
    },
    {
      name: 'Warhammer 40K: Darktide',
    }],
  },
];

const carousel = [
  {
    key: 'first',
    image: qxc2Pic,
    alt: 'FXO qxc interview',
    label: 'FXO qxc interviewed after All-Killing Incredible Miracle (full sweep)',
    description: 'StarCraft 2 - July 2011',
  },
  {
    key: 'second',
    image: mastersPic,
    alt: 'Masters',
    label: 'Masters Rank - Top 0.18% of players in the world',
    description: 'League of Legends - August 2022',
  },
  {
    key: 'third',
    image: qxc1Pic,
    alt: 'FXO qxc',
    label: 'FXO qxc celebrating a win in Korea',
    description: 'StarCraft 2 - July 2011',
  },
];

const mastery = [
  {
    name: 'Player vs Player',
    games: [{
      name: 'Overwatch Masters Rank',
    },
    {
      name: 'Starcraft 2 top ~200 in world',
    },
    {
      name: 'League of Legends Master rank',
    },
    {
      name: 'Heroes of the Storm Top 60 in North America',
    },
    {
      name: 'Hearthstone Rank 5',
    },
    {
      name: 'Duelyst Legend Rank',
    },
    {
      name: 'Prismata Top 15 in world',
    },
    {
      name: 'Guilty Gear Strive Celestial Rank',
    },
    {
      name: 'Team Fight Tactics Platinum IV Rank',
    },
    {
      name: 'Starcraft: Brood War B- Rank on Iccup',
    },
    {
      name: 'Age of empires IV top 700',
    },
    {
      name: 'Marvel Snap Rank 85',
    },
    {
      name: 'Clash Royale - Won IEM weekly tournament',
    }],
  },
  {
    name: 'Player vs Game',
    games: [{
      name: 'Destiny 2 Completed 3 raids in contest mode, 2 raids with fireteam of 3, 2 raids with fireteam of 2, and 5 dungeons solo',
    },
    {
      name: 'Xcom: Enemy Unknown completed campaign on classic difficult & ironman',
    },
    {
      name: 'Xcom 2: Completed campaign on highest difficulty & ironman',
    },
    {
      name: 'Diablo 3 Reached Greater Rift 70 in Hardcore',
    },
    {
      name: 'Path of Exile Reached Maps in Solo Self Found Hardcore, Zizaran Gauntlet',
    },
    {
      name: 'Slay the Spire Ascension 14',
    },
    {
      name: 'Guitar Hero 3 Completed Through the Fire and Flames on Expert',
    }],
  },
];

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

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSkills: false,
      showAchievements: false,
    };
  }

  render() {
    const { showSkills, showAchievements } = this.state;

    let skills = (
      <p className="showMore" onClick={() => this.setState({ showSkills: true })}>Show Gaming Breakdown</p>
    );
    if (showSkills) {
      skills = breadth.map((catGroup) => {
        const gamePairs = groupPairs(catGroup.games);
        return (
          <div key={`gamecat-${catGroup.name}`}>
            <h3>{catGroup.name}</h3>
            {gamePairs.map(([game1, game2]) => <SkillPair key={`game-${game1.name}-${game2.name}`} entry1={game1} entry2={game2} />)}
          </div>
        );
      });
    }

    let achievements = (
      <p className="showMore" onClick={() => this.setState({ showAchievements: true })}>Show More Achievements</p>
    );
    if (showAchievements) {
      achievements = mastery.map((catGroup) => (
        <div key={`gamecat-${catGroup.name}`}>
          <h3>{catGroup.name}</h3>
          {catGroup.games.map((game1) => <SkillPair key={`game-${game1.name}`} entry1={game1} entry2={{}} />)}
        </div>
      ));
    }

    return (
      <div>
        <div id="skills">
          <Grid className="scroll-module">
            <h2 className="text-center">Skills</h2>
            <Quote
              quote="I play games."
            />
            <hr />
            <Stats />
            {skills}
          </Grid>
        </div>
        <div id="achievements">
          <Grid className="scroll-module">
            <h2 className="text-center">Achievements</h2>
            <Quote
              quote="I master games."
            />
            <hr />
            <Carousel id="carousel">
              {carousel.map((carouselItem) => (
                <Carousel.Item key={`carousel-${carouselItem.key}`}>
                  <img
                    className="d-block w-100 carouselImage"
                    src={carouselItem.image}
                    alt={carouselItem.alt}
                  />
                  <Carousel.Caption>
                    <h3>{carouselItem.label}</h3>
                    <p>{carouselItem.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
            {achievements}
          </Grid>
        </div>
      </div>
    );
  }
}

export default Skills;
