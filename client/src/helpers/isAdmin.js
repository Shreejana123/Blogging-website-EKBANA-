const { Navigate } = require("react-router-dom")

const isAdmin = (req, res) => {
    if(req.user.role === "admin"){
        Navigate('/admin');
    } else {
        Navigate('/');
        }
}

exports = { isAdmin }
