
const connection = require('../database/connection')




function index(req, res) {
    connection.query(`SELECT * FROM movies`, (err, results) => {

        if (err) return res.status(500).json({ err: err })

        console.log(results);
        res.json({ movies: results })


    })

}



function show(req, res) {

    const id = req.params.id
    const sql = `SELECT * FROM movies WHERE id = ?`

    const reviewsSql = `SELECT * FROM reviews WHERE movie_id = ? ORDER BY id DESC`


    connection.query(sql, [id], (err, results) => {

        if (err) return res.status(500).json({ err: err })

        if (results.length == 0) return res.status(404).json({ err: 'movie not found' })


        connection.query(reviewsSql, [id], (err, reviewsResults) => {

            if (err) return res.status(500).json({ err: err })

            const movie = {
                ...results[0],
                reviews: reviewsResults
            }

            res.json(movie)
        })

    })
}


function review(req, res) {

    const movie_id = Number(req.params.id)

    const { name, text, vote } = req.body
    console.log('Received data:', { name, text, vote })

    const sql = "INSERT INTO `reviews`   SET  name=?, vote=?, text=?, movie_id=?"

    connection.query(sql, [name, vote, text, movie_id], (err, result) => {


        if (err) return res.status(500).json({ error: err })

        return res.status(201).json({ success: true })

    })





    console.log(movie_id);




}


module.exports = { index, show, review }