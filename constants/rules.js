const fs = require('fs');

const rules = JSON.parse(fs.readFileSync('data/rules.json', 'utf-8'));

module.exports = rules;
