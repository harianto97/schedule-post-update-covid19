const router = require('express').Router()
const dataCovidController = require('../controller/datacovid')

router.post('/data-covid', dataCovidController)

module.exports = router