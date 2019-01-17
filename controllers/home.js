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
  console.log(req.params.con);
  
  const newCon = new Con({
    text: req.params.con,
  });
  
  newCon.save((err) => {
    if (err) {
      console.log(err);
      next(err);
    }
  });
}
