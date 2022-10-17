const router = require('express').Router();

router.use('/api/v1/tickets', require('../routes/ticket'));

// all application need this route for api health check
router.get('/health', (_req, res) => {
    res.status(200).json({message: 'Success'});
})

module.exports = router;