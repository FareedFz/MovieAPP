const express = require('express');

const router = express.Router();

const controllers = require('../Controllers/movieAppController')

router.get('/test',controllers.getAll);
router.post('/createMovieList',controllers.addMovie);

module.exports = router;