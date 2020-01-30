const fs = require("fs");
const util = require("util");
const axios = require("axios");
const inquirer = require("inquirer");
const generate = require("./generateHTML");
const puppeteer = require("puppeteer");

const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
    {
        type: "input",
        message: "Enter your GitHub username:",
        name: "username"
    },
    {
        type: "input",
        message: "What's your favorite color?",
        name: "color"
    }
];

var profile = ""

inquirer
    .prompt(questions)
    .then(function (answers) {
        let queryUrl = `https://api.github.com/users/${answers.username}`;
        let starUrl = `https://api.github.com/users/${answers.username}/starred`
        const requestOne = axios.get(queryUrl);
        const requestTwo = axios.get(starUrl);
        const color = answers.color

        axios
            .all([requestOne, requestTwo])
            .then(axios.spread(function (...responses) {
                const responseOne = responses[0]
                const responseTwo = responses[1]
                const stars = responseTwo.data.length

                const html = generate(responseOne, color, stars);
                profile = html.toString()
                return writeFileAsync("index.html", html);
            }));
    });


(async function () {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.setContent()
        await page.emulateMedia('screen')
        await page.pdf({
            path: 'profile.pdf',
            format: 'A4',
            printBackground: true
        });

        await browser.close();
    } catch (error) {
        console.log("Error")
    }
})();
