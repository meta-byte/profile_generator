const fs = require("fs");
const util = require("util");
const axios = require("axios");
const inquirer = require("inquirer");
const request = require("request");

// const questions = [

// ];

// function writeToFile(fileName, data) {

// }

// function init() {

// init();

// function getStars(res) {
//     const
// }

inquirer
    .prompt(
        {
            message: "Enter your GitHub username:",
            name: "username"
        },
        {
            // message: "What's your favorite color?",
            // color: "color"
        })
    .then(function ({ username }) {
        const queryUrl = `https://api.github.com/users/${username}`;
        const starUrl = `https://api.github.com/users/${username}/starred`
        console.log(queryUrl)

        axios.get(queryUrl).then(function (res) {
            const username = res.data.login
            const name = res.data.name
            const profileURL = res.data.html_url
            const profileIMG = res.data.avatar_url
            const followCount = res.data.following
            // const starsURL = res.data.starred_url
            const location = res.data.location
            const bio = res.data.bio
            const blog = res.data.blog
            const repos = res.data.public_repos
            const company = res.data.company
            // console.log(res)
            // console.log(username)
            // console.log(name)
            // console.log(profileURL)
            // console.log(bio)
            // console.log(repos)
            // console.log(followCount)

        });

        axios.get(starUrl).then(function (res) {
            const stars = res
            console.log(res.data.length)
        });
    });