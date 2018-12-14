const fs = require('fs');

const roles = JSON.parse(fs.readFileSync('data/roles.json', 'utf-8'));

module.exports = roles;
