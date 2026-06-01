const { query, validationResult } = require('express-validator');

const validateSearch = [
    query('title')
        .trim()
        .notEmpty().withMessage('Search title query parameter is required')
        .isString().withMessage('Title must be a string'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = { validateSearch };
