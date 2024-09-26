const router = require('express').Router();
const userRoutes = require('./api/userRoutes');
const thoughtRoutes = require('./api/thoughtRoutes');

// Prefix all user routes with `/api/users`
router.use('/api/users', userRoutes);

// Prefix all thought routes with `/api/thoughts`
router.use('/api/thoughts', thoughtRoutes);

module.exports = router;
