#!/usr/bin/env node

const program = require('commander');
const inquirer = require('inquirer');
const opn = require('opn');
const keval = require('./src/data');

program.version('1.0.0')
    .description("Keval Bhanderi's Resume - The Console.log Version")
    .parse(process.argv);

console.log(keval.bio);
inquirer.prompt({
    name: 'link',
    type: 'list',
    message: keval.prompt,
    choices: keval.links.concat({
        'name': `Email at (${keval.email})`,
        'value': 'mailto:' + keval.email
    })

}).then(answers => {
    console.log(`Opening ${answers.link}`);
    opn(answers.link);
});