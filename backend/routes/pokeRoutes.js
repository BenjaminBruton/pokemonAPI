const express = require('express')
const router = express.Router()
const { getPokemon, getOnePokemon } = require('../controllers/pokeController')

// Pulls conroller logic for ALL pokemon and routes to server.js
router.get('/', getPokemon)

// Pulls conroller logic for selected pokemon by id and routes to server.js
router.get('/:id', getOnePokemon)

// Exports router to act as intermediary between controller and server
module.exports = router