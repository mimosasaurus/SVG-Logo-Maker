import { CircleShape, SquareShape, TriangleShape } from './shapes.js';
test ("insure Circle is a Circle"), () => {
    const Circle = new CircleShape (300,200, "green");
    Circle.addText ("AAA", 48, "black");
    expect (Circle.toString()).toBe('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" width="300" height="200"><ellipse rx="150" ry="100" cx="150" cy="100" fill="green"></ellipse><text font-family="Verdana" font-size="48" fill="black" x="104.4375" y="118.62109375" svgjs:data="{&quot;leading&quot;:&quot;1.3&quot;}"><tspan dy="0" x="104.4375" svgjs:data="{&quot;newLined&quot;:true}">AAA</tspan></text></svg>');
}