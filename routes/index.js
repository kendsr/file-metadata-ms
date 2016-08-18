var express = require('express');
var multer  = require('multer')
var upload = multer({ dest: './uploads' })
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('landing', { title: 'File Upload' });
});

router.post('/upload', upload.single('file'), function (req, res) {
  var filesize = { size: req.file.size};
  fs.unlinkSync("./uploads/" + req.file.filename);
  res.json(filesize);
});


module.exports = router;
