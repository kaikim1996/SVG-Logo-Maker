const inquirer = import('inquirer');
const fs = import('fs');
const svg = import('svg.js')


const createShape = [
    {
        type: 'input',
        message: 'Enter Up to 3 characters:',
        name: 'text',
        validate: function(value) {
            if (value.length > 3) {
                return "Input must be 3 characters or less!"
            }
            else {
                return true
            }
        }
    },
    {
        type: 'input',
        message: 'Enter text color:',
        name: 'textColor'
    },
    {
        type: 'input',
        message: 'Enter shape color:',
        name: 'shapeColor'
    },
    {
        type: 'list',
        message: 'Enter shape:',
        choices: ['circle', 'triangle', 'square'],
        name: 'shape'
    }
];

inquirer.prompt(questions)
    {
            const dataToWrite = createShape(response);
            writeToFile('logo', dataToWrite);
    }
    
function writeToFile(name, data) {

    fs.writeFile(`./examples/${name}.svg`, data, err => err ? console.error(err) : console.log('Generated logo.svg!'));

}


