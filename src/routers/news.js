const express = require('express');
var router = express.Router();


const NewController = require('../app/controllers/NewController');

router.use('/:slug', NewController.show)
router.use('/', NewController.index)

module.exports = router;