import fs from 'fs';
import { createSVGWindow } from 'svgdom';
import { SVG, registerWindow } from '@svgdotjs/svg.js';

const window = createSVGWindow();
const document = window.document;
registerWindow(window, document);

// Base Shape class
export class Shape {
  constructor(width, height, bgColor) {
    this.draw = SVG().size(width, height);
    this.shape = this.createShape(width, height, bgColor);
  }

  createShape(width, height, bgColor) {
    return null; // Implement in subclasses
  }

  addText(text, fontSize, textColor) {
    if (this.text) {
      this.text.remove();
    }

    const centerX = this.draw.width() / 2;
    const centerY = this.draw.height() / 2;

    this.text = this.draw.text(text)
      .font({ family: 'Verdana', size: fontSize })
      .fill(textColor)
      .cx(centerX) 
      .cy(centerY); 
  }

  saveToFile(filename) {
    const svgString = this.draw.svg();
    fs.writeFileSync(filename, svgString);
    console.log(`SVG file generated: ${filename}`);
  }
  toString() {
    return this.draw.svg();
  }
}

// Circle subclass - project specifications indicate 300x200, which makes this an ellipse.
export class CircleShape extends Shape {
  constructor(width, height, bgColor) {
    super(width, height, bgColor); // Fixed size of 300x200
  }

  createShape(width, height, bgColor) {
    return this.draw.ellipse(width, height).center(width / 2, height / 2).fill(bgColor);
  }
}

export class SquareShape extends Shape {
  constructor(width, height, bgColor) {
    super(width, height, bgColor); // Fixed size of 300x200
  }

  createShape(width, height, bgColor) {
    return this.draw.rect(width, height).center(width / 2, height / 2).fill(bgColor);
  }
}


export class TriangleShape extends Shape {
  constructor(width, height, bgColor) {
    super(width, height, bgColor);
  }

  createShape(width, height, bgColor) {
    const points = `0,${height} ${width},${height} ${width / 2},0`;
    return this.draw.polygon(points).fill(bgColor);
  }
}
