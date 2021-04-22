const express = require('express')
const router = express.Router()

const Coaster= require('./../models/coaster.model')
const Park = require('./../models/park.model')



// NUEVA COASTER
router.get('/new', (req,res) => {

    Park
        .find()
        .then(allResponse => {
            res.render('pages/coasters/new-coaster', {allResponse})
            })
        .catch(err => console.log('Error', err))
})

router.post('/new', (req, res) => {

    const { name, description, inversions, length, park } = req.body
    console.log(req.body)
    Coaster
        .create({ name, description, inversions, length, park })
        .then(()=> res.redirect('/'))
        .catch(err => console.log('Error', err))
})

//LISTA DE COASTERS

router.get('/', (req, res) => {
    
    Coaster
    .find()
    .populate('park_id')
    .then(allCoasters => {
        res.render('pages/coasters/coasters-index', {allCoasters})
        console.log(allCoasters)
        })
    .catch(err => console.log('Error', err))

})

//BORRAR

router.get('/delete', (req, res) => {
  
    const { coaster_id } = req.query

    Coaster
        .findByIdAndRemove(coaster_id)
        .then(()=> res.redirect('/'))
        .catch(err => console.log('Error', err))

})

//EDITAR

router.get('/edit', (req, res) => {

    const  {coaster_id}  = req.query

    Coaster
        .findById(coaster_id)
        .populate('park_id')
        .then(coaster => { res.render('pages/coasters/edit-coaster', coaster)})
         .catch(err => console.log('Error', err))
    
 })

router.post('/edit', (req, res) => {

    const {coaster_id } = req.query
    const { name, description, inversions, length, park } = req.body

    Coaster
        .findByIdAndUpdate(coaster_id, { name, description, inversions, length, park })
        .populate('park_id')
        .then(editedCoaster => { res.redirect(`/coasters/${coaster_id}`) })
        .catch(err => console.log('Error', err))

})


//DETALLES

   router.get('/:coaster_id', (req,res) => {

    const { coaster_id } = req.params
    Coaster
        .findById(coaster_id)
        .populate('park_id')
        .then(oneCoaster => {
            res.render('pages/coasters/coaster-details', oneCoaster)
            console.log(oneCoaster)
        })
        .catch(err => console.log('Error', err))
   })

   

module.exports = router
