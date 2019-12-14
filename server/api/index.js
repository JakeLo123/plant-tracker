const router = require('express').Router()

router.use('/plants', require('./plants'))

module.exports = router;