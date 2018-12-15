const User = require('../models/User');
const { roles, rolesByFraction } = require('../constants/roles');
const rules = require('../constants/rules');
const fractions = require('../constants/fractions');

exports.index = (req, res) => {
  res.render('intro', {
    title: 'Intro',
    roles,
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

exports.registrace = (req, res) => {
  res.render('registrace', {
    title: 'Registrace',
    rolesByFraction,
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
