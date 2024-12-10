
const NotFound = (req, res, next) => {
    res.status(404).json({ err: '🤷‍♂️ Sorry Not Found 🤷‍♂️' })
}

module.exports = NotFound