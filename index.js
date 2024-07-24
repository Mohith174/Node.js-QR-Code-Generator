// import inquirer from 'inquirer';
// // var qr = require('qr-image'); --> Below, beacuase for the type it can eithe rbe commonJs or ESM
// import qr from "qr-image";
// import fs from "fs";

// inquirer
//   .prompt([{
//     message: "Type in your URL: ", 
//     name: "URL"}
//   ])
//   .then((answers) => {
//     const url = answers.URL;
     
//     var qr_svg = qr.image(url);
//     qr_svg.pipe(fs.createWriteStream('qrImage.png'));
//     // console.log(answers);

//     fs.writeFile('URL.txt', data, (err) => {
//         if (err) throw err;
//         console.log('The file has been saved!');
//       }); 

//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });


import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
import path from 'path';

const questions = [
  {
    type: 'input',
    name: 'url',
    message: 'Type in your URL or text:',
    validate: input => input.trim() !== '' || 'Input cannot be empty.',
  },
  {
    type: 'list',
    name: 'format',
    message: 'Select the output format:',
    choices: ['PNG', 'SVG', 'EPS'],
    default: 'PNG'
  },
  {
    type: 'input',
    name: 'size',
    message: 'Enter the size for your QR code (default 5):',
    default: '5',
    validate: input => !isNaN(parseInt(input, 10)) || 'Please enter a valid number.',
  },
  {
    type: 'input',
    name: 'outputDir',
    message: 'Enter the output directory:',
    default: './',
    validate: input => {
      if (!fs.existsSync(input)) {
        fs.mkdirSync(input, { recursive: true });
      }
      return true;
    },
  }
];

inquirer.prompt(questions).then(answers => {
  const { url, format, size, outputDir } = answers;
  const options = {
    type: format.toLowerCase(),
    size: parseInt(size, 10),
    margin: 1
  };

  const qrImage = qr.image(url, options);
  const outputPath = path.join(outputDir, `qrCode.${format.toLowerCase()}`);

  qrImage.pipe(fs.createWriteStream(outputPath)).on('finish', () => {
    console.log(`QR Code saved to ${outputPath}`);
  });
}).catch(error => {
  if (error.isTtyError) {
    console.error('Prompt could not be rendered in the current environment');
  } else {
    console.error('An error occurred:', error);
  }
});

