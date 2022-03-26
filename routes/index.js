var express = require('express');
var path = require('path');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//http://localhost:3000/ItemsForm
router.get('/itemForm', function(req, res){

  res.sendFile(path.join(__dirname, '..','public', 'itemForm.html'));
});

router.post('/itemForm', function(req, res){

  res.json({

    schoolName : req.body.schoolName,
    firstFemale : req.body.firstFemale,
    secondFemale: req.body.secondFemale,
    firstMale: req.body.firstMale,
    secondMale: req.body.secondMale,
    plural: req.body.plural
  });
});
module.exports = router;
