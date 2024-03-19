import jwt from "jsonwebtoken"

const generateTokenandCookies = (userId , res) =>{
    const token = jwt.sign({userId},process.env.JWT_KEY,{
        expiresIn: '1d'
    })

    res.cookie("jwt",token,{
        maxAge : 15*24*60*60*1000,
        httpOnly : true,
    })
}

export default generateTokenandCookies;