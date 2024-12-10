

const ServerError = (err, req, res, next) => {
    console.log(err.stack);
    res.status(500).json('Error 500 : Something went wrong')

}

module.exports = ServerError