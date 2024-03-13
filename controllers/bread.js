const router = require('express').Router()
const Bread = require('../models/bread')

// GET retrieve all the bread
router.get('/', async (req, res) => {
    try{
        const breads = await Bread.find()
        res.render('index', {
            breads
        })
    } catch (error) {
        console.log('error:', error)
        res.json({ message: 'error getting bread' })
    }
})

// Render New Page
router.get('/new', (req, res) => {
    res.render('new')
})

// GET retrieve bread by id
router.get('/:id', async (req, res) => {
    const { id } = req.params
    const bread = await Bread.findById(id)
    res.render('show', {
        bread
    })                                                                                                                             
})

router.get('/:index/edit', (req, res) => {
    const { index } = req.params
    res.render('edit', {
        bread:Bread[index],
        index
    })
})

// CREATE bread
router.post('/', async (req, res) => {
    if (!req.body.image) req.body.image = undefined
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }
    await Bread.create(req.body)
    res.redirect('/bread')
})

// PUT (UPDATE) Bread
router.put('/:index', (req, res) => {
    const { index } = req.params
    if (!req.body.image) req.body.image = 'https://houseofnasheats.com/wp-content/uploads/2022/02/French-Bread-1.jpg'
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }
    Bread[index] = req.body
    res.redirect(`/bread/${index}`)
})

// DELETE Bread
router.delete('/:id', async (req, res) => {
    const { id } = req.params
    await Bread.findByIdAndDelete(id)
    res.redirect('/bread')
})

module.exports = router