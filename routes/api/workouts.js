const router = require('express').Router()
const db = require("../../models");

router.get('/', (req, res) => {
    res.json({ message: 'API is available, but you have to do your job better.' })
})

module.exports = router;