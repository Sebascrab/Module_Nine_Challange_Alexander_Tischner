// node modules
const inquirer = require('inquirer');
const fs = require('fs');
const { title } = require('process');

// inquirer to generate questions
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the name of this project?',
            name: 'Title',
            // validate property to check that something is entered by user
            validate: (value) => { if(value){return true} else {return 'Please enter the name of your application!'}},
        },
        {
            type: 'input',
            message: 'Quick description?',
            name: 'Description', 
            validate: (value) => { if(value){return true} else {return 'Please enter the description of your application!'}},
        },
        {
            type: 'input',
            message: 'How do you install the application?',
            name: 'Installation', 
            validate: (value) => { if(value){return true} else {return 'Please enter the installation instructions of your application!'}},
        },
        {
            type: 'input',
            message: 'What are the instructions for your application?',
            name: 'Usage', 
            validate: (value) => { if(value){return true} else {return 'Please enter the instructions on how to use your application!'}},
        },
        {
            type: 'input',
            message: 'Anyone you would like to credit?',
            name: 'Credits', 
            validate: (value) => { if(value){return true} else {return 'Please enter the name of your project!'}},
        },
        {
            // list of licenses 
            type: 'list',
            message: 'What license did you use?',
            name: 'License', 
            choices: ['The MIT License', 'The GPL License', 'Apache License', 'GNU License', 'N/A'],
            validate: (value) => { if(value){return true} else {return 'Please enter the name of your project!'}},
        },
        {
            type: 'input', 
            message: 'GitHub Username: ?', 
            name: 'Git', 
            validate: (value) => { if(value){return true} else {return 'Please enter the name of your project!'}},
        },
        {
            type: 'input', 
            message: 'E-Mail Address?', 
            name: 'Email',
            validate: (value) => { if(value){return true} else {return 'Please enter the name of your project!'}},
        }
    ])
    .then(({
        Title,
        Description,
        Installation,
        Usage,
        Credits,
        License,
        Git,
        Email,
        Linkedin,
        Contributions,
    }) =>{
    // template to be used
    const template = `# ${Title}
    
    # Description
    ${Description}
    ## Installation
    ${Installation}
    ## Contributions
    ${Contributions}
    ## Usage
    ${Usage}
    ## Credits
    ${Credits}
    ## License
    ${License}
    
    # Contact
    * Github :${Git}
    * LinkedIn :${Linkedin}
    * Email :${Email}` ;
    // Function to create our readme using fs
    createNewFile(title,data);
    }
    );

    // creating our createNewFile function
    function createNewFile(fileName,template){
        // fs
        fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`,data,()=>{
            if(err){
                console.log(err)
            }
            console.log('Your README has been generated');

        })
    }

    // Now Lets Install Our Packages