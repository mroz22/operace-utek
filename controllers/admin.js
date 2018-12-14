const User = require('../models/User');

exports.index = (req, res) => {
    res.render('intro', {
        title: 'Intro',
    });
};

exports.info = (req, res) => {
    res.render('info', {
        title: 'Info'
    });
};

exports.pravidla = (req, res) => {
    res.render('pravidla', {
        title: 'Pravidla'
    });
};

exports.admin = (req, res, next) => {
    User.find({ admin: false }, (err, users) => {
        if (err) { return next(err); }
        res.render('admin', {
            title: 'Admin',
            users,
        })
    });
};
