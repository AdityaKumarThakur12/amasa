const express = require('express');
const router = express.Router();
const { add, get } = require('../Controller/restaurent');

router.post('/add', add );
router.get('/getAll', get );

module.exports = router;