
const jwt = require('jsonwebtoken')


const generateTokenAndSend = async (userId)=>{

    try {
        const token = await jwt.sign({userId}, process.env.JWT_SECRETE_KEY, {
            expiresIn: '25d'
        })
        return token
    } catch (error) {
        throw new Error('Error while creating jwt token in login route')
    }
}




module.exports = generateTokenAndSend