/**
 * GET /
 * Home page.
 */

const Con = require('../models/Con.js');
exports.index = (req, res) => {
  res.render('home', {
    title: 'Home'
  });
};

exports.connection = (req, res, next) => {
  
  const newCon = new Con({
    text: req.query.con,
  });
  
  newCon.save((err) => {
    if (err) {
      console.log(err);
      next(err);
    }
  });
  
  if (req.query.ref) {
    res.redirect(req.query.ref);
  } else {
    res.render('home');
  }
}
