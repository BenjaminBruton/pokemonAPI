const asyncHandler = require('express-async-handler')

// GET all Pokemon
// GET /pokemon
const getPokemon = asyncHandler(async (req, res) => {
    res.status(200).json({ id: 1, name: "abra" })
})

const getOnePokemon = asyncHandler(async(req, res) => {
    res.status(200).json({ id: 2, name: "aerodactyl" })
})

module.exports = {
    getPokemon,
    getOnePokemon
}