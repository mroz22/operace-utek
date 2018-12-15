const fs = require('fs');

const fractions = JSON.parse(fs.readFileSync('data/fractions.json', 'utf-8'));

module.exports = fractions;
