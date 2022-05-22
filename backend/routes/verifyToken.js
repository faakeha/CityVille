const jwt = require('jsonwebtoken');

const verifyToken = (req,res,next)=>{
    const authHeader = req.headers.token;
    if(authHeader){
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_KEY, (err, user) =>{
            if(err){
                res.status(403).json("Token is not valid!");
            }
            req.user = user;
            next();
        })

    }
};

const verifyToken2 = (req,res,next)=>{
    const authHeader = req.body.token;
    if(authHeader){
        jwt.verify(authHeader, process.env.JWT_KEY, (err, user) =>{
            if(err){
                res.status(403).json("Token is not valid!");
            }
            req.user = user;
            next();
        })

    }
};



const verifyTokenAndAuth = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id === req.params.id){
            next()
        }
        else{
            res.status(403).json("Permission Denied")
        }
    })
}
module.exports = {verifyToken, verifyTokenAndAuth, verifyToken2};