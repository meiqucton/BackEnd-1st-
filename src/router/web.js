const express = require('express');
const {Login ,Home, List, Enter } = require('../controller/homeController');
const router = express.Router();
router.get('/', Login);
router.get('/Home', Home);
router.get('/enter', Enter);
router.get('/list', List);

module.exports = router;