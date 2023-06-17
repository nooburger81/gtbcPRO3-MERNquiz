const express = require('express');
const Quizzes = require('../models/Quiz');
const checkAuth = require('../middleware/check-auth');
const router = express.Router();

module.exports = router;