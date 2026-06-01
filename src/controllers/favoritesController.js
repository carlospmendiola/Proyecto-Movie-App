const User = require('../models/User');
const Movie = require('../models/Movie');

// 1. POST /api/movies/favorites -> Add a movie to favorites
const addFavorite = async (req, res) => {
    try {
        const { movieId } = req.body; 
        const userId = req.user.id; // Comes from the auth middleware later

        // Verify the movie actually exists in our local DB catalog
        const movieExists = await Movie.findById(movieId);
        if (!movieExists) {
            return res.status(404).json({ message: "Movie not found in catalog" });
        }

        // Find user and add the movie ID to their favorites list if it isn't already there
        const user = await User.findById(userId);
        if (user.peliculasFavoritas.includes(movieId)) {
            return res.status(400).json({ message: "Movie is already in your favorites" });
        }

        user.peliculasFavoritas.push(movieId);
        await user.save();

        return res.status(201).json({ message: "Movie added to favorites successfully", favorites: user.peliculasFavoritas });
    } catch (error) {
        return res.status(500).json({ error: "Server error adding favorite" });
    }
};

// 2. GET /api/movies/favorites -> Get all favorites for the logged-in user
const getFavorites = async (req, res) => {
    try {
        const userId = req.user.id;

        // .populate('peliculasFavoritas') swaps the raw IDs out for the full Movie objects!
        const user = await User.findById(userId).populate('peliculasFavoritas');
        
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json(user.peliculasFavoritas);
    } catch (error) {
        return res.status(500).json({ error: "Server error fetching favorites" });
    }
};

// 3. DELETE /api/movies/favorites/:id -> Remove a movie from favorites
const removeFavorite = async (req, res) => {
    try {
        const movieId = req.params.id;
        const userId = req.user.id;

        const user = await User.findById(userId);
        
        // Filter out the movie ID we want to remove
        user.peliculasFavoritas = user.peliculasFavoritas.filter(id => id.toString() !== movieId);
        await user.save();

        return res.status(200).json({ message: "Movie removed from favorites", favorites: user.peliculasFavoritas });
    } catch (error) {
        return res.status(500).json({ error: "Server error removing favorite" });
    }
};

module.exports = { addFavorite, getFavorites, removeFavorite };
