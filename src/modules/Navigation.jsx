import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './Navigation.css';

require('smoothscroll-polyfill').polyfill();

const tabs = [{
  id: 'profile',
  text: 'Profile',
}, {
  id: 'experiences',
  text: 'Experiences',
}, {
  id: 'interests',
  text: 'Interests',
}, {
  id: 'skills',
  text: 'Skills',
}, {
  id: 'contact',
  text: 'Contact',
}];


export function smoothScroll(tabId) {
  let scrollHeight = document.getElementById(tabId).offsetTop;
  if (window.innerWidth < 768) {
    scrollHeight -= 50; // Compensate for nav bar
  }

  window.scroll({
    top: scrollHeight,
    left: 0,
    behavior: 'smooth',
  });
}

class Navigation extends React.Component {
  componentDidMount() {
    window.onscroll = function updateNav() {
      // Check to see if nav is fixed
      let fixedHeight = window.innerHeight;
      if (window.innerWidth >= 768) {
        fixedHeight = window.innerHeight - 60; // Nav becomes fixed earlier
      }

      if (window.pageYOffset > fixedHeight) {
        document.getElementsByClassName('navbar')[0].classList.add('fixed');
      } else {
        document.getElementsByClassName('navbar')[0].classList.remove('fixed');
      }

      // Check to see which tab is active
      let active = -1;

      for (let i = 0; i < tabs.length; i += 1) {
        let modifier = 0;
        if (window.innerWidth < 768) {
          modifier = 50; // Compensate for nav bar
        }

        if (window.pageYOffset >= document.getElementById(tabs[i].id).offsetTop - modifier) {
          active += 1;
        }
      }

      // Check if bottom
      if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
        active += 1;
      }
      if (active === -1) { active = 0; } // Highlight first tab to start
      if (active === tabs.length) { active -= 1; } // Double counted last tab

      // Set active tab
      const tabElements = document.getElementById('navigation').getElementsByTagName('li');
      for (let i = 0; i < tabElements.length; i += 1) {
        // Remove active
        tabElements[i].classList.remove('active');
      }
      // Add active
      tabElements[active].classList.add('active');
    };
  };

  render() {
    return (
      <div id="navigation">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <div className="header-text">KR Games</div>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav onSelect={smoothScroll}>
              {tabs.map((tab) => <NavItem key={`tab-${tab.id}`} eventKey={tab.id}>{tab.text}</NavItem>)}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
