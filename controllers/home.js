const User = require('../models/User');
const game = require('../constants/game');
const roles = require('../constants/roles');
const rules = require('../constants/rules');

exports.index = (req, res) => {
  res.render('intro', {
    title: 'Intro',
    game,
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

exports.admin = (req, res, next) => {
  console.log('aaa');
  console.log(res.locals.user);
  if (!req.user || !req.user.admin) {
    req.flash('errors', 'brekeke');
    console.log('redirect logic!!!');
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
