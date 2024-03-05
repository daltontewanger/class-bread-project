const router = require('express').Router()
const Bread = require('../models/bread')

// GET retrieve all the bread
router.get('/', (req, res) => {
    res.send(Bread)
})

// GET retrieve bread by index
router.get('/:index', (req, res) => {
    const { index } = req.params
    res.send(Bread[index])                                                                                                                             
})

module.exports = router