const mongoose = require('mongoose')

const recipieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    ingredients: [{ type: String }],
    instructions: { type: String },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

const RecipieModel = mongoose.model('Recipie', recipieSchema)

class Recipie {
constructor(title, description, ingredients, instructions, userId) {
    this.title = title;
    this.description = description;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.userId = userId;
}


//get recipies of associated users
static async getUserRecipies(userid){
    try {
        const recipe = await RecipieModel.find({userId: userid});
        if (!recipe) {
            throw new Error('Recipe not found');
        }
        return recipe;
    } catch (error) {
        throw new Error(`Fetching recipe failed: ${error.message}`);
    }
}

//create recipie
static async createRecipie(title, description, ingredients, instructions, userId) {
    try {
        const newRecipe = new RecipieModel({ title, description, ingredients, instructions, userId });
        await newRecipe.save();
        return newRecipe;
    } catch (error) {
        throw new Error(`Recipe creation failed: ${error.message}`);
    }
}
//get recipie by recipie_id
static async getRecipie(recipieId) {
    try {
        const recipe = await RecipieModel.findById(recipieId);
        if (!recipe) {
            throw new Error('Recipe not found');
        }
        return recipe;
    } catch (error) {
        throw new Error(`Fetching recipe failed: ${error.message}`);
    }
}
//all recipies
static async getRecipies() {
    try {
        const recipe = await RecipieModel.find();
        if (!recipe) {
            throw new Error('Recipies not found');
        }
        return recipe;
    } catch (error) {
        throw new Error(`Fetching recipe failed: ${error.message}`);
    }
}
//update recipie
static async updateRecipie(recipieId, newData) {
    try {
        const updatedRecipe = await RecipieModel.findByIdAndUpdate(recipieId, newData, { new: true });
        if (!updatedRecipe) {
            throw new Error('Recipe not found');
        }
        return updatedRecipe;
    } catch (error) {
        throw new Error(`Recipe update failed: ${error.message}`);
    }
}
//delete recipie
static async deleteRecipie(recipieId) {
    try {
        const deletedRecipe = await RecipieModel.findByIdAndDelete(recipieId);
        if (!deletedRecipe) {
            throw new Error('Recipe not found');
        }
        return deletedRecipe;
    } catch (error) {
        throw new Error(`Recipe deletion failed: ${error.message}`);
    }
}
}

module.exports = {Recipie, RecipieModel}
