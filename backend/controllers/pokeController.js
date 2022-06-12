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
    //const myObj = JSON.parse(jsonData);
    var id = Number(req.params.id);
    var pokemon = null;

    jsonData.results.map(function(data) {
        if (data.id === id) {
        pokemon = data;
        };
  });

  res.send(pokemon);
    
});
//pokemonList.result.req.id 
module.exports = {
    getPokemon,
    getOnePokemon
}