const fs = require('fs');

const roles = JSON.parse(fs.readFileSync('data/roles.json', 'utf-8'));

class RolesUtils {
  constructor(users) {
    this.users = users;
    this.roles = roles;
  }

  getRegisteredCount(role) {
    const filtered = this.users.filter((u) => {
      if (u.role && u.role.role === role) {
        return true;
      }
      return false;
    });
    return filtered.length;
  }

  getRemainingCount(role) {
    return role.count - this.getRegisteredCount(role);
  }

  isDisabled(role) {
    return this.getRemainingCount(role) === 0;
  }

  getRolesByFraction() {
    const rolesByFraction = {};
    roles.forEach((role) => {
      if (!rolesByFraction[role.fraction]) {
        rolesByFraction[role.fraction] = [];
      }
      rolesByFraction[role.fraction].push(role);
    });
    return rolesByFraction;
  }
}

module.exports = {
  roles,
  RolesUtils,
};
