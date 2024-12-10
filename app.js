const express = require('express')
const server = express()
const MoviesRouter = require('./routes/movies')
const NotFound = require('./middlewares/NotFound')

const PORT = process.env.PORT
const HOST = process.env.HOST

server.listen(PORT, () => {
    console.log(`Server is listening on port ${HOST}:${PORT}`);

})

server.get('/', (req, res) => {
    res.send('Server is Running')
})

server.use('/movies', MoviesRouter)

server.use(NotFound)
