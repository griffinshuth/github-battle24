const gatekeeper =(req, res, next) =>{
    const pass = req.query.pass;
    if (pass === 'ferret') {
        next()
    } else {
        res.status(400).json({ message: "invalad password" })
    }
}

module.exports.gatekeeper = gatekeepeR