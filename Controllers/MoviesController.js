
const connection = require('../database/connection')

function index(req, res) {
    connection.query(`SELECT * FROM movies`, (err, results) => {

        if (err) return res.status(500).json({ err: err })

        console.log(results);
        res.json({ movies: results })


    })

}




module.exports = { index }