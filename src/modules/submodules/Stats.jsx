/* eslint no-mixed-operators: 0 */
import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './Stats.css';

// Code inspired by https://codepen.io/semibran/pen/NPOGdd

const statsData = [
  {
    title: 'Strategy',
    value: '100',
    description: 'StarCraft 2 IEM Champion, Masters ranked player in League of Legends, best Hearthstone player in the world, I am well versed in strategy games.',
    color: '#339933',
  },
  {
    title: 'FPS',
    value: '85',
    description: 'Boom headshot.',
    color: '#333399',
  },
  {
    title: 'Tabletop',
    value: '99',
    description: 'I literally make board games.',
    color: '#999933',
  },
  {
    title: 'Other',
    value: '92',
    description: 'I play games.',
    color: '#993399',
  },
  {
    title: 'RPG',
    value: '97',
    description: 'I\'ve no-lifed a game or two in my time.',
    color: '#993333',
  },
];

class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tabIndex: 0 };
  }

  componentDidMount() {
    this.postRender();
  }

  componentDidUpdate() {
    this.postRender();
  }

  postRender() {
    const { tabIndex } = this.state;
    const setTabIndex = (index) => { this.setState({ tabIndex: index }); };

    // Define pentagon (or other polygon) size and coordinates.
    const polygonX = 240;
    const polygonY = 240;
    const polygonSize = 120;
    // Define size of circles.
    const circleSize = 56;
    let circles = [];

    // Get canvas context.
    const canvas = document.getElementById('statsCanvas');
    const ctx = canvas.getContext('2d');

    function MouseHandler() {
      const handler = this;
      this.move = (e) => {
        handler.x = e.clientX - canvas.getBoundingClientRect().left;
        handler.y = e.clientY - canvas.getBoundingClientRect().top;
      };
      document.onmousemove = this.move;
    }

    const vertices = [];
    function drawRegularPolygon(x, y, fill, stroke, strokeWidth, sides, radius) {
      // Draws a regular polygon onto the canvas.

      // Variable declarations
      let arc;
      let point;
      const points = [];

      // Begin drawing with parameters
      ctx.beginPath();
      ctx.fillStyle = fill;
      ctx.strokeStyle = stroke;
      ctx.lineWidth = strokeWidth;
      // Add round line joints
      ctx.lineJoin = 'round';
      // Using sides+1 because the sides should be linked properly.
      for (let i = 0; i <= sides + 1; i += 1) {
        // Create arc variable
        arc = i * 2 * Math.PI / sides;
        // Add coordinates to array for reuse
        point = {};
        point.x = x + radius * Math.sin(arc);
        point.y = y - radius * Math.cos(arc);
        if (i === 0)ctx.moveTo(point.x, point.y);
        else ctx.lineTo(point.x, point.y);
        // Prevent point duplication
        if (i < sides + 1)points.push(point);
      }
      // Draw polygon
      ctx.fill();
      ctx.stroke();
      // Close path, just in case
      ctx.closePath();
      // Return points array for future use
      return points;
    }
    circles = [];
    function redraw() {
      circles = [];

      const polygon = drawRegularPolygon(polygonX, polygonY, '#666', '#333', 2, statsData.length, polygonSize);
      ctx.beginPath();
      ctx.setLineDash([5]);
      ctx.lineDashOffset = 10;
      ctx.strokeStyle = '#333';
      for (let i = 0; i < polygon.length; i += 1) {
        ctx.moveTo(polygonX, polygonY);
        ctx.lineTo(polygon[i].x, polygon[i].y);
      }
      ctx.stroke();
      // Remove line dash for future use
      ctx.setLineDash([0]);

      // Inner polygon
      ctx.beginPath();
      let index;
      let stat;
      let text;
      const innerPolygonVertices = [];
      let x;
      let y;
      for (let i = 0; i < statsData.length + 1; i += 1) {
        index = i % statsData.length;
        if (vertices[index] === undefined)vertices[index] = {};
        if (innerPolygonVertices[index] === undefined)innerPolygonVertices[index] = {};
        vertices[index].x = polygon[index].x;
        vertices[index].y = polygon[index].y;
        stat = statsData[index].value;
        const distX = vertices[index].x - polygonX;
        const distY = vertices[index].y - polygonY;
        vertices[index].distX = distX;
        vertices[index].distY = distY;
        vertices[index].distTotal = Math.sqrt(distX * distX + distY * distY);
        vertices[index].radians = Math.atan2(distY, distX);
        x = polygonX + Math.cos(vertices[index].radians) * (vertices[index].distTotal * stat / 100);
        y = polygonY + Math.sin(vertices[index].radians) * (vertices[index].distTotal * stat / 100);
        innerPolygonVertices[index].x = x;
        innerPolygonVertices[index].y = y;
        ctx.lineTo(x, y);
      }
      // Set alpha of polygon
      ctx.globalAlpha = 0.5;
      ctx.fillStyle = '#339933';
      ctx.fill();

      ctx.globalAlpha = 1;
      ctx.strokeStyle = '#339933';
      ctx.stroke();

      // Draw circles;
      for (let i = 0; i < statsData.length; i += 1) {
        index = i;
        x = vertices[index].x + Math.cos(vertices[index].radians) * (circleSize + 8);
        y = vertices[index].y + Math.sin(vertices[index].radians) * (circleSize + 8);
        ctx.beginPath();
        ctx.arc(x, y, circleSize, 0, 2 * Math.PI, false);
        ctx.fillStyle = '#333';
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(x, y, circleSize - 4, 0, 2 * Math.PI, false);
        ctx.fillStyle = '#fff';
        if (index === tabIndex)ctx.fillStyle = statsData[index].color;
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(x, y, circleSize - 6, 0, 2 * Math.PI, false);
        ctx.fillStyle = statsData[index].color;
        if (index === tabIndex)ctx.fillStyle = '#fff';
        ctx.fill();
        ctx.closePath();
        circles.push({
          x,
          y,
          size: circleSize - 6,
          radius: (circleSize - 6) / 2,
          stat: statsData[index].title,
          color: statsData[index].color,
        });
        ctx.fillStyle = '#fff';
        if (index === tabIndex)ctx.fillStyle = statsData[index].color;
        ctx.font = '16px Open Sans';
        text = statsData[index].title.toUpperCase();
        stat = statsData[index].value;
        ctx.fillText(text, x - ctx.measureText(text).width / 2, y);
        ctx.fillText(stat, x - ctx.measureText(stat).width / 2, y + 16);
      }
    }
    redraw();
    const mouse = new MouseHandler();

    function loop() {
      let shouldLoop = true;
      for (let i = 0; i < circles.length; i += 1) {
        const circle = circles[i];
        const distX = circle.x - mouse.x;
        const distY = circle.y - mouse.y;
        const distTotal = Math.sqrt(distX * distX + distY * distY);
        if (distTotal < circle.size) {
          redraw();
          setTabIndex(i);
          shouldLoop = false;
        }
      }
      if (shouldLoop) {
        setTimeout(loop, 100);
      }
    }
    loop();
  }

  render() {
    const { tabIndex } = this.state;

    return (
      <div id="stats">
        <Grid>
          <Row>
            <Col md={8}>
              <canvas id="statsCanvas" width="480" height="480" />
            </Col>
            <Col md={4}>
              <h3>{ statsData[tabIndex].title }</h3>
              <p>
                { statsData[tabIndex].description }
              </p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Stats;
