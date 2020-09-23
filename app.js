// Allow app.js file to access the fs module's functions through the fs assignment
const fs = require('fs');

//Import generatePage function from page-template.js
const generatePage = require('./src/page-template.js');

// Array that holds the user command-line arguments (9.1)
const profileDataArgs = process.argv.slice(2, process.argv.length);

// Store user command-line arguments as distinct variables -- destructured assignment code (9.2)
const [name, github] = profileDataArgs;

// Create HTML File (9.2)
fs.writeFile('./index.html', generatePage(name, github), err => {
    if (err) throw new Error(err);

    console.log('Porfolio complete! Check out index.html to see the output');
});










// Lesson 9.1 Original Code

// const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

// // Displays profile data in command line one at a time
// const printProfileData = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//         console.log(profileDataArr[i]);
//     }
//     console.log('=============');

//     profileDataArr.forEach(profileItem => console.log(profileItem)); 
// };

// printProfileData(profileDataArgs);