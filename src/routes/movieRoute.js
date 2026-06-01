const express = require('express');
const router = express.Router();
const { searchMovies, getMovieById } = require('../controllers/movieController');
const { validateSearch } = require('../middlewares/movieValidator');
// const { verifyToken } = require('../middlewares/authMiddleware'); // Group A's task

// Route for searching movies (Validated)
router.get('/search', validateSearch, searchMovies);

// Route for getting a single movie's details
router.get('/:id', getMovieById);

module.exports = router;

const express = require('express');
const router = express.Router();
const { addFavorite, getFavorites, removeFavorite } = require('../controllers/favoritesController');

// NOTE: These routes will need the verifyToken middleware from Group A added to them later!
router.post('/favorites', addFavorite);
router.get('/favorites', getFavorites);
router.delete('/favorites/:id', removeFavorite);

module.exports = router;