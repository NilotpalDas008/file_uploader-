const express = require('express');
const router = express.Router();
const upload = require('../config/multerConfig'); 
const uploadController = require('../controllers/uploadController'); 


router.post('/upload', upload.single('myFile'), uploadController.uploadfile);

module.exports = router;