const fs = require('fs');

const game = JSON.parse(fs.readFileSync('data/game.json', 'utf-8'));

module.exports = game;
