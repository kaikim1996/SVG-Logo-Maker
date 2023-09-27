const Triangle = import('./triangle.js');
const Circle = import('./circle.js');
const Square = import('./square.js');

function createShape({ text, textColor, shapeColor, shape }) {
    let logo;
    text = text.toUpperCase();
    switch (shape) {
        case 'triangle':
            logo = new Triangle();
            break;
        case 'circle':
            logo = new Circle();
            break;
        case 'square':
            logo = new Square();
            break;
    }

    //set the color of the shape
    logo.setColor(shapeColor);
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${logo.render()}

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

    </svg>
    `
}

module.exports = createShape;