var express = require('express');
var router = express.Router();

const data = [
  {
    id: 1,
    title: 'casper great'
  }
]

/* GET home page. */
// http://localhost:3000/api/products
router.get('/products', function(req, res, next) {
  
  res.send({
    success: true,
    data
  }).end
});

module.exports = router;
