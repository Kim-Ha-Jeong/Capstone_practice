const express = require('express');
const router = express.Router();
const user = require('../model/user.model');

router.get('/', user.getAll);

router.put('/', user.create);

module.exports = router;