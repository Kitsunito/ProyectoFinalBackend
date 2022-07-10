//Variable para simular un usuario
const user = {
    admin: true
}

const checkAdmin = (req, res, next) => {
    if (user.admin)
        next();
    else
        res.status(403).json({ Error: `Permisos insuficientes para la ruta ${req.originalUrl} y el método ${req.method}.`});
}

module.exports = checkAdmin