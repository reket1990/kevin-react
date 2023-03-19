import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

function Experience({ entry }) {
  return (
    <Row className="experience">
      <Col md={4}>
        <img className="icon" src={entry.icon} alt="Logo" />
        <h4>{entry.name}</h4>
        <p>
          {entry.start_date}
          {' '}
          -
          {' '}
          {entry.end_date}
        </p>
      </Col>
      <Col md={8}>
        <p className="title">{entry.title}</p>
        <p className="description">{entry.description}</p>
        <div className="details">
          { entry.location && (
            <span className="detail">
              <span className="glyphicon glyphicon-map-marker" />
              {' '}
              {entry.location}
            </span>
          )}
          { entry.location && entry.website && (
            <span className="divider">|</span>
          )}
          { entry.website && (
            <span className="detail">
              <span className="glyphicon glyphicon-link" />
              <a href={entry.website} target="_blank" className="link" rel="noreferrer">{entry.website}</a>
            </span>
          )}
        </div>
      </Col>
    </Row>
  );
}

Experience.propTypes = {
  entry: PropTypes.shape({
    icon: PropTypes.string,
    name: PropTypes.string,
    start_date: PropTypes.string,
    end_date: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    location: PropTypes.string,
    website: PropTypes.string,
  }).isRequired,
};

export default Experience;
