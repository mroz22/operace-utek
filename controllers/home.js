const User = require('../models/User');
const { roles, RolesUtils } = require('../constants/roles');
const rules = require('../constants/rules');
const fractions = require('../constants/fractions');

exports.index = async (req, res) => {
    console.log('aaaaaaaaaaaa');
  const users = await User.find();
    console.log('bbbbbbbbbb');

    console.log(users);
  const rolesUtils = new RolesUtils(users);
  console.log('utils');
  res.render('intro', {
    title: 'Intro',
    roles,
    rolesUtils,
  });
};

exports.info = (req, res) => {
  res.render('info', {
    title: 'Info',
  });
};

exports.pravidla = (req, res) => {
  res.render('pravidla', {
    title: 'Pravidla',
    rules,
  });
};

exports.registrace = async (req, res) => {
  const users = await User.find();
  const rolesUtils = new RolesUtils(users);
  res.render('registrace', {
    title: 'Registrace',
    rolesUtils,
    fractions,
  });
};

exports.admin = (req, res, next) => {
  if (!req.user || !req.user.admin) {
    req.flash('errors', 'brekeke');
    return res.redirect('/login');
  }
  User.find({ admin: false }, (err, users) => {
    if (err) { return next(err); }
    res.render('admin', {
      title: 'Admin',
      users,
    });
  });
};
