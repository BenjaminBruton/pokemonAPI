const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000

const app = express()

app.use('/pokemon', require('./routes/pokeRoutes'))
app.use('/pokemon/:id', require('./routes/pokeRoutes'))

app.listen(port, () => console.log(`Server started on port ${port}`))