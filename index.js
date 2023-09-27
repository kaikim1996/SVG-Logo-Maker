const fs = require('fs');
const inquirer = require('inquirer');
const SVG = require('svg.js');

async function generateLogo() {
  try {
    const userInput = await inquirer.prompt([
      {
        type: 'list',
        name: 'color',
        message: 'Select a color for your logo:',
        choices: ['red', 'green', 'blue', 'yellow'],
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Select a shape for your logo:',
        choices: ['circle', 'square', 'triangle'],
      },
      {
        type: 'input',
        name: 'text',
        message: 'Enter text for your logo:',
      },
      {
        type: 'input',
        name: 'filename',
        message: 'Enter a filename for the SVG file (e.g., logo.svg):',
        default: 'logo.svg',
      },
    ]);

    const { color, shape, text, filename } = userInput;

    const draw = SVG(filename).size(200, 200);
    const shapeElement = draw.shape(shape).fill(color);
    const textElement = draw.text(text).move(20, 150).font({ size: 30, fill: 'white' });

    draw.link(shapeElement, textElement);

    fs.writeFileSync(filename, draw.svg());
    console.log(`Logo saved as ${filename}`);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

generateLogo();