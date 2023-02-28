import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

const generateStars = (name, value) => {
  const output = [];

  for (let counter = 0; counter < 5; counter += 1) {
    if (counter < value) {
      output.push(<span key={`${name}-${counter}`} className="fa fa-star starFull" />);
    } else {
      output.push(<span key={`${name}-${counter}`} className="fa fa-star starEmpty" />);
    }
  }

  return output;
};

function Skill({ entry1, entry2 }) {
  const entry1Component = (
    <div>
      <Col xs={entry1.value ? 8 : 12} md={entry2.name ? (entry1.value ? 4 : 6) : 12}> {/* eslint-disable-line */}
        <h4>{entry1.name}</h4>
      </Col>
      { entry1.value
        && (typeof entry1.value === 'number'
          ? (
            <Col xs={4} md={2} className="value">
              { generateStars(entry1.name, entry1.value) }
            </Col>
          )
          : (
            <Col xs={4} md={2} className="value">
              { entry1.value }
            </Col>
          )) }
    </div>
  );

  const entry2Component = (
    <div>
      <Col xs={entry2.value ? 8 : 12} md={entry2.name ? (entry2.value ? 4 : 6) : 12}> {/* eslint-disable-line */}
        <h4>{entry2.name}</h4>
      </Col>
      { entry2.value
        && (typeof entry2.value === 'number'
          ? (
            <Col xs={4} md={2} className="value">
              { generateStars(entry2.name, entry2.value) }
            </Col>
          )
          : (
            <Col xs={4} md={2} className="value">
              { entry2.value }
            </Col>
          )) }
    </div>
  );

  return (
    <Row>
      { entry1Component }
      { entry2.name ? entry2Component : null}
    </Row>
  );
}

Skill.propTypes = {
  entry1: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }).isRequired,
  entry2: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }).isRequired,
};

export default Skill;
