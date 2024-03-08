const router = require('express').Router()
const Bread = require('../models/bread')

// GET retrieve all the bread
router.get('/', (req, res) => {
    res.render('index', {
        breads: Bread
    })
})

// Render New Page
router.get('/new', (req, res) => {
    res.render('new')
})

// GET retrieve bread by index
router.get('/:index', (req, res) => {
    const { index } = req.params
    res.render('show', {
        bread: Bread[index],
        index
    })                                                                                                                             
})

// CREATE bread
router.post('/', (req, res) => {
    if (!req.body.image) req.body.image = 'https://houseofnasheats.com/wp-content/uploads/2022/02/French-Bread-1.jpg'
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }
    Bread.push(req.body)
    res.redirect('/bread')
})

// DELETE Bread
router.delete('/:index', (req, res) => {
    const { index } = req.params
    Bread.splice(index, 1)
    res.redirect('/bread')
})

module.exports = router