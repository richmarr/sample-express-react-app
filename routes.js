

exports.home = {
    get: (req, res, next) => {
        res.send(`Hello World ${req.user.email}!`)
    }
}