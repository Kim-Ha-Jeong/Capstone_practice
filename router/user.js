const express = require('express');
const router = express.Router();
const user = require('../model/user.model');

router.get('/', user.getAll);

router.post('/create', user.create);

router.get('/:id', user.findById);

module.exports = router;