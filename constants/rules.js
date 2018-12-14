const fs = require('fs');

const roles = JSON.parse(fs.readFileSync('data/rules.json', 'utf-8'));

module.exports = rules;
