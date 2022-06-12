const asyncHandler = require('express-async-handler')
const jsonData = require('../data/data.json')

// GET all Pokemon
// GET /pokemon
const getPokemon = asyncHandler(async (req, res) => {
    res.status(200).json(jsonData);
});

// GET pokemon by id
// GET /pokemon/{id}
const getOnePokemon = asyncHandler(async(req, res) => {
    var id = Number(req.params.id);
    var pokemon = null;

    // Deconstructs the json data to pull the specific data we want using the map method
    jsonData.results.map(function(data) {
        if (data.id === id) {
        pokemon = data;
        };
  });

  res.send(pokemon);
    
});

// Exports data to router
module.exports = {
    getPokemon,
    getOnePokemon
}