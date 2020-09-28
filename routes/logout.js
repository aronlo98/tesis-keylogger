var express = require('express');
var router = express.Router();

// GET home page.
router.get('/', function(req, res) {
    req.session.destroy((err) => {
        if(err) console.log(err)
        res.redirect('/')
    })
})
  
module.exports = router