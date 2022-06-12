const express = require('express');
const port = process.env.PORT || 5000

const app = express()

app.get('/', (req, res) => {
    res.send("Please append '/pokemon' to see all 150 Pokemon or '/pokemon/{idhere}' to see a particular pokemon!");
})

app.use('/pokemon', require('./routes/pokeRoutes'))
app.use('/pokemon/:id', require('./routes/pokeRoutes'))

app.listen(port, () => console.log(`Server started on port ${port}`))