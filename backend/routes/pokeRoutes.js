const express = require('express')
const router = express.Router()
const { getPokemon, getOnePokemon } = require('../controllers/pokeController')

router.get('/', getPokemon)

router.get('/:id', getOnePokemon)

module.exports = router