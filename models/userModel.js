const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const generateTokenAndSend = require('../utils/generateTokenAndSend')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true     
    },
    password: {
        type: String,
        required: true, 
        minlength: 6      
    },
    recipies: [{type: mongoose.Schema.Types.ObjectId, ref: 'Recipie'}]
}, {timestamps: true})
const UserModel = mongoose.model('User', userSchema)

//only return not response sending here

class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    static async register(username, email, password){
        try {
            
            const user = await UserModel.findOne({username})
            
            if(user && user.fullName){
                console.log(user.fullName)
                throw new Error("Username already exists")
            }
    
            const hashedPassword = await bcrypt.hash(password, 10)
    
            const newUser = new UserModel({
                username,
                email,
                password: hashedPassword,
            })
            if(newUser){
                await newUser.save()
    
                return {
                    _id: newUser._id,
                    username: newUser.username,
                    email: newUser.email
                }
            }else{
                throw new Error("Invalid user data")
            }

        } catch (error) {
            throw new Error(`Registration Failed ${error.message}`)
            
        }
    }


    static async login(username, password){
        try {
    
            const user = await UserModel.findOne({username});
            if (!user) {
                throw new Error("Invalid username or password");
            }
    
            if(password.length<6){
                throw new Error("Passwords must be atleast 6 characters")
        
            }
    
            const isPasswordMatched = await bcrypt.compare(password, user?.password || "");
            if (!isPasswordMatched) {
                throw new Error("Invalid username or password");
            }
    
            const jwtToken =  await generateTokenAndSend(user?._id);
    
                return{
                    _id: user._id,
                    username: user.username,
                    email: user.email,
                    token : jwtToken
                };
            
        } catch (error) {
            console.log("Error in login controller:", error.message);
            throw new Error("Internal Server Error");
        }
    }

    static async updateProfile(userId, newData) {
            try {
            // Update the user profile
            const updatedUser = await UserModel.findByIdAndUpdate(userId, newData, { new: true });
            if (!updatedUser) {
                throw new Error('User not found');
            }
            return updatedUser;
            } catch (error) {
            throw new Error(`Profile update failed: ${error.message}`);
            }
    }
    
        static async getUserRecipies(userId) {
            try {
            // Retrieve recipes associated with the user
            const user = await UserModel.findById(userId).populate('recipies');
            if (!user) {
                throw new Error('User not found');
            }
            return user.recipies;
            } catch (error) {
            throw new Error(`Fetching recipes failed: ${error.message}`);
            }
    }

}




module.exports = {User, UserModel}