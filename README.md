# profile_generator


## Overview

A command line application that allows a user to enter a github username and a color and a simple profile will be generated in PDF format. The profile gathers this information from the Github API. The Materialize CSS framework was used for the styling of the profile. 


### Gallery

images/profile generator demo.gif
![Demo](/images/ProfileGeneratorDemo.gif/ "Generate a user profile!")


## Tech and Features Used

| Feature       | Summary                                                                                                  | 
| ------------- | -------------------------------------------------------------------------------------------------------- |
| Materialize CSS Framework | Used Materialize to style the HTML document that is converted into "profile.pdf"             |
| Node.js       | Node.js was used to run the application in testing and is what the app is designed to use.               |
| Puppeteer     | The Puppeteer package was used to create a PDF using HTML input.                                           |
| Inquirer      | Inquirer was used to ask the user questions and store their answers for use with Materialize and Github API. |
| Axios         | All Github API calls were done using the Axios package.                                                    |


## Required Packages
* Inquirer
* Puppeteer
* Axios


## How to use

* Run Node on index.js
* Enter a github username
* Enter a color
* "profile.pdf" will be saved in the root directory of the


## Known Bugs

* Currently no Error handling.
* "Null" will be displayed in areas where the user has not filled in profile


## Contact Info

mail: hylander.garrett@gmail.com

Phone: (801)-592-0371

[Linkedin](https://www.linkedin.com/in/garrett-h-859007a0/)