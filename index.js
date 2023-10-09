// const {CircleShape, SquareShape, Triagle} = require('./shape.js')

import { CircleShape, SquareShape, TriangleShape } from './lib/shapes.js';
import inquirer from "inquirer";



inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: `Type 3 letters that will appear on your SVG file!`,
        },
        {
            type: 'input',
            name: 'textColour',
            message: `Write the colour or hexadeimal value for you want for your letters!`,
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Which shape would you like to use?',
            choices: ['Circle','Triangle','Square' ]
        },
        {
            type: 'input',
            name: 'shapeColour',
            message: `Write the hexadecimal number you want for your shape!`,
        },
    ])
    .then ((data) => {
        let logoshape = null;
        switch (data.shape){
            case "Circle":
                logoshape = new CircleShape (300,200,data.shapeColour); 
                break;
            case "Triangle":
                logoshape = new TriangleShape (300,200,data.shapeColour);
                break;
            case "Square":
                logoshape = new SquareShape (300,200,data.shapeColour);
                break;
        }
        if (logoshape){
            logoshape.addText(data.text, 48, data.textColour);
            logoshape.saveToFile("logo.svg");
        }
    })
