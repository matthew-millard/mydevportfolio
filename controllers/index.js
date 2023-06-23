// Imports
const router = require('express').Router();
const indexRoutes = require('./indexRoutes');

router.use('/', indexRoutes);

// Export
module.exports = router;
