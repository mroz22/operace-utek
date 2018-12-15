const fs = require('fs');

const roles = JSON.parse(fs.readFileSync('data/roles.json', 'utf-8'));

const rolesByFraction = {};

roles.forEach((role) => {
  if (!rolesByFraction[role.fraction]) {
    rolesByFraction[role.fraction] = [];
  }
  rolesByFraction[role.fraction].push(role);
});


module.exports = {
  roles,
  rolesByFraction,
};
