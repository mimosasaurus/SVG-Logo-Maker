// const {CircleShape, SquareShape, Triagle} = require('./shape.js')

import { CircleShape, SquareShape, TriangleShape } from './lib/shapes.js';

// import { CircleShape, SquareShape, Triangle } from "./shape.js";

const circle = new TriangleShape(300, 200, 'green');
// console.info('width', circle.width);
// console.info('height', circle.height);
circle.addText('Circle', 48, 'black');
circle.saveToFile('circle.svg');