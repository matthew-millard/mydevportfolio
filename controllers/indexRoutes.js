// Imports
const router = require('express').Router();

// GET Homepage
router.get('/', async (req, res) => {
  try {
    return res.status(200).render('homepage');
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server Error' });
  }
});

// Exports
module.exports = router;
