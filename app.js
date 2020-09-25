// Use prompts from Inquirer
const inquirer = require('inquirer');

// // Allow app.js file to access the fs module's functions through the fs assignment
// const fs = require('fs');

// //Import generatePage function from page-template.js
// const generatePage = require('./src/page-template.js');

//Function to ask questions to user
const promptUser = () => {
return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your Github Username (Required)',
            validate: githubInput => {
                if(githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username.');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAbout',
            message: 'Would you like to enter some information about yourself for an "About" section?',
            default: true
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:',
            when: ({ confirmAbout }) => {
                if(confirmAbout) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ]);
};

//Function to ask user about project
const promptProject = portfolioData => {
    // If there is no 'projects' array property, create one
    if (!portfolioData.projects) {
    portfolioData.projects = [];
    }
    console.log(`
  =================
  Add a New Project
  =================
  `);
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name!');
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please write a description!');
                return false;
            }
        }
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you build this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)',
        validate: linkInput => {
            if (linkInput) {
                return true;
            } else {
                console.log('Please include a link to your Github!');
                return false;
            }
        }
      },
      {
        type: 'confirm',
        name: 'feature',
        message: 'Would you like to feature this project?',
        default: false
      },
      {
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter another project?',
        default: false
      }
    ])
    .then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
            return promptProject(portfolioData);
        } else {
            return portfolioData;
        }
    });
  };

promptUser()
.then(promptProject)
.then(portfolioData => {
    console.log(portfolioData);
});

// const pageHTML = generatePage(name, github);

// // Create HTML File (9.2)
// fs.writeFile('./index.html', pateHTML, err => {
//     if (err) throw err;

//     console.log('Porfolio complete! Check out index.html to see the output');
// });







//Lesson 9.2 Original Code
// // Array that holds the user command-line arguments (9.1)
// const profileDataArgs = process.argv.slice(2, process.argv.length);

// // Store user command-line arguments as distinct variables -- destructured assignment code (9.2)
// const [name, github] = profileDataArgs;


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