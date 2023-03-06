/* eslint no-mixed-operators: 0 */
import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './Stats.css';

// Code inspired by https://codepen.io/semibran/pen/NPOGdd

class Stats extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { tabIndex: 0 };
  // }

  componentDidMount() {
    // Define player object and statistics
    const player = {
      strategy: 99,
      fps: 85,
      tabletop: 99,
      other: 92,
      rpg: 97,
    };

    // Array that takes information from the player object to get the order
    // in which stats are displayed onscreen
    const statOrder = Object.keys(player);

    // Define colors
    const statColors = ['#339933', '#333399', '#999933', '#993399', '#993333'];

    // Define pentagon (or other polygon) size and coordinates.
    const polygonX = 240;
    const polygonY = 240;
    const polygonSize = 120;
    // Define size of circles.
    const circleSize = 56;
    let circles = [];
    const circleIndexes = statColors.map((color) => ({ defaultColor: color, color, over: false }));

    const innerPolygonColor = statColors[0];
    const innerPolygonKnobs = statColors.map(() => ({ over: false }));

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
      // Note that a circle can be made by setting sides to radius/2.

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

      const polygon = drawRegularPolygon(polygonX, polygonY, '#666', '#333', 2, statOrder.length, polygonSize);
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
      for (let i = 0; i < statOrder.length + 1; i += 1) {
        index = i % statOrder.length;
        if (vertices[index] === undefined)vertices[index] = {};
        if (innerPolygonVertices[index] === undefined)innerPolygonVertices[index] = {};
        vertices[index].x = polygon[index].x;
        vertices[index].y = polygon[index].y;
        stat = player[statOrder[index]];
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
      ctx.fillStyle = innerPolygonColor;
      ctx.fill();

      ctx.globalAlpha = 1;
      ctx.strokeStyle = innerPolygonColor;
      ctx.stroke();

      for (let i = 0; i < innerPolygonVertices.length; i += 1) {
        x = innerPolygonVertices[i].x;
        y = innerPolygonVertices[i].y;
        innerPolygonKnobs[i].x = x;
        innerPolygonKnobs[i].y = y;
        if (innerPolygonKnobs[i].over) {
          ctx.beginPath();
          ctx.arc(x, y, 8, 0, 2 * Math.PI, false);
          ctx.strokeStyle = statColors[index];
          ctx.stroke();
          ctx.closePath();
        }
      }

      // Draw circles;
      for (let i = 0; i < statOrder.length; i += 1) {
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
        if (circleIndexes[index].over)ctx.fillStyle = statColors[index];
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(x, y, circleSize - 6, 0, 2 * Math.PI, false);
        ctx.fillStyle = statColors[index];
        if (circleIndexes[index].over)ctx.fillStyle = '#fff';
        ctx.fill();
        ctx.closePath();
        circles.push({
          x,
          y,
          size: circleSize - 6,
          radius: (circleSize - 6) / 2,
          stat: statOrder[index],
          color: statColors[index],
        });
        ctx.fillStyle = '#fff';
        if (circleIndexes[index].over)ctx.fillStyle = statColors[index];
        ctx.font = '16px Open Sans';
        text = statOrder[index].toUpperCase();
        stat = player[statOrder[index]];
        ctx.fillText(text, x - ctx.measureText(text).width / 2, y);
        ctx.fillText(stat, x - ctx.measureText(stat).width / 2, y + 16);
      }
    }
    redraw();
    function getClosestPointOnLine(line, x, y) {
      const lerp = (a, b, t) => (a + t * (b - a));
      const dx = line.x1 - line.x0;
      const dy = line.y1 - line.y0;
      let t = ((x - line.x0) * dx + (y - line.y0) * dy) / (dx * dx + dy * dy);
      t = Math.min(1, Math.max(0, t));
      const lineX = lerp(line.x0, line.x1, t);
      const lineY = lerp(line.y0, line.y1, t);
      return ({ x: lineX, y: lineY });
    }
    function pythagorean(dx, dy) {
      return Math.sqrt(dx * dx + dy * dy);
    }
    const fps = 60;
    const mouse = new MouseHandler();
    let change;
    function loop() {
      change = false;
      for (let i = 0; i < circles.length; i += 1) {
        const circle = circles[i];
        const distX = circle.x - mouse.x;
        const distY = circle.y - mouse.y;
        const distTotal = Math.sqrt(distX * distX + distY * distY);
        if (distTotal < circle.size) {
          if (!circleIndexes[i].over)change = true;
          circleIndexes[i].over = true;
        } else {
          if (circleIndexes[i].over)change = true;
          circleIndexes[i].over = false;
        }
      }
      for (let i = 0; i < innerPolygonKnobs.length; i += 1) {
        const knob = innerPolygonKnobs[i];
        const distX = knob.x - mouse.x;
        const distY = knob.y - mouse.y;
        const distTotal = pythagorean(distX, distY);
        if (distTotal < 8) {
          if (!knob.over)change = true;
          knob.over = true;
        } else {
          if (knob.over)change = true;
          knob.over = false;
        }
        if (mouse.down && knob.over) {
          knob.dragging = true;
          const line = {
            x0: polygonX, y0: polygonY, x1: vertices[i].x, y1: vertices[i].y,
          };
          const point = getClosestPointOnLine(line, mouse.x, mouse.y);
          const distStart = pythagorean(point.x - polygonX, point.y - polygonY);
          const distStartEnd = pythagorean(vertices[i].x - polygonX, vertices[i].y - polygonY);
          const percent = distStart / distStartEnd;
          player[statOrder[i]] = Math.round(percent * 100);
          change = true;
        }
      }
      if (change)redraw();
      setTimeout(loop, 1000 / fps);
    }
    setTimeout(loop, 1000 / fps);
  }

  render() {
    return (
      <div id="stats">
        <Grid>
          <Row>
            <Col md={8}>
              <canvas id="statsCanvas" width="480" height="480" />
            </Col>
            <Col md={4}>
              <h3>Strategy</h3>
              <p>
                StarCraft 2 IEM Champion, Masters ranked player in League of Legends,
                best Hearthstone player in the world, I am well versed in strategy games.
              </p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Stats;
