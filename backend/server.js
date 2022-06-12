const express = require('express');
const port = process.env.PORT || 5000

const app = express()

// Trademark for legal purposes :)
const tm = '\u2122';

app.get('/', (req, res) => {
    res.send(`Please append '/pokemon' to see all 150 Pokemon${tm} or 
    '/pokemon/{idhere}' to see a particular Pokemon${tm}! \n
     Example: /pokemon/50 results in {"id":50,"name":"growlithe"}`);

})

app.use('/pokemon', require('./routes/pokeRoutes'))
app.use('/pokemon/:id', require('./routes/pokeRoutes'))

app.listen(port, () => console.log(`Server started on port ${port}`))