var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({dest: __dirname+'/../../public/uploads'});



var ctrlUpload = require('../controllers/upload');

//GET main page.
router.get('/', ctrlUpload.upload);

//POST Upload
router.post('/upload', upload.single('fileUpload'), ctrlUpload.doUpload);

module.exports = router;
