
const {User} = require('../models/userModel')



exports.register = async function(req, res){
    try {
        const { username, email, password } = req.body;
        const response = await User.register(username, email, password); // it is class
        res.status(200).json({ 
            msg: 'User registered successfully',
            user: response
        });
    } catch (error) {
        console.log("Error in register controller:", error.message)
        res.status(500).json({error: "Internal Server Error"})
    }
}

// {
// _id: user._id,
// username: user.username,
// email: user.email,
// token : jwtToken}

exports.login = async function(req, res){
    try {
        const { username, password } = req.body;
        const response = await User.login(username, password); // it is class
        const {_id,  email, token} = response

        res.status(200).json({ 
            msg: 'User logged in successfully',
            jwtToken: token,
            user: {
                _id,
                username: response.username,
                email
            }
        });
    } catch (error) {
        console.log("Error in login controller:", error.message)
        res.status(500).json({error: "Internal Server Error"})
    }
}



exports.updateProfile = async function(req, res){
    try {
        // const { username,email, password } = req.body;
        const userId = req.params.id
        const response = await User.updateProfile(userId, req.body); // it is class
        const {_id, email} = response
        res.status(200).json({ 
            msg: 'User updated successfully',
            user: {
                _id,
                username: response.username,
                email
            }
        });
    } catch (error) {
        console.log("Error in updateProfile controller:", error.message)
        res.status(500).json({error: "Internal Server Error"})
    }
}






exports.logout = async function(req, res){}
