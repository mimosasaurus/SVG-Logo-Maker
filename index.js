// const {CircleShape, SquareShape, Triagle} = require('./shape.js')

import { CircleShape, SquareShape, TriangleShape } from './lib/shapes.js';
import inquirer from "inquirer";



inquirer
    .prompt([
        {
            type: 'input',
            name: 'svgName',
            message: `Type 3 letters that will appear on your SVG file!`,
        },
        {
            type: 'input',
            name: 'nameColor',
            message: `Write the hexadecimal number you want for your letters!`,
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Which shape would you like to use?',
            choices: ['Circle','Triangle','Square' ]
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: `Write the hexadecimal number you want for your shape!`,
        },
    ])