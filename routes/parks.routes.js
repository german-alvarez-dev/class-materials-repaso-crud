const express = require('express')
const router = express.Router()

const Park = require('./../models/park.model')

router.get('/', (req, res) => res.render('pages/parks/list'))

// NUEVO PARQUE
router.get('/new', (req, res) => res.render('pages/parks/new-park'))

router.post('/new', (req, res) => {

    const {name, description} = req.body
    console.log(name)
    Park
        .create({ name, description })
        .then(response => res.render('/'))
        .catch(err => console.log('Error', err))

})

module.exports = router
