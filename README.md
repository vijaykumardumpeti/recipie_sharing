
# Recipe Sharing Platform API
This API provides endpoints for managing recipes and user authentication on a recipe sharing platform.

## Deployment

The project is deployed and can be accessed at [https://recipie-sharing-1.onrender.com](https://recipie-sharing-1.onrender.com).
You can use the following APIs to interact with the system.
## API Endpoints

#### Setup
Clone the repository:
`` bash

git clone <repository_url>

Install dependencies:
`` bash
cd backend
npm install
## Set up environment variables:
Create a .env file in the root directory and define the following variables:

PORT=3000
MONGODB_URI=mongodb+srv://vijaydumpeti70:%23Jay123@cluster0.ayvmw68.mongodb.net/recipie_share?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET_KEY=JAY_VIJAY
Start the server:
npm start


#### API Endpoints
### User Authentication
# Register User
- **Endpoint:** `/api/auth/register`
- **Method:** `POST`
- Request Body:
{
  "username": "example_user",
  "email": "user@example.com",
  "password": "example_password"
}
# Response:
{
  "userId": "user_id",
  "username": "example_user",
  "email": "user@example.com"
}

Login User
# Register User
- **Endpoint:** `/api/auth/login`
- **Method:** `POST`
- Request Body:

{
  "email": "user@example.com",
  "password": "example_password"
}
# Response:

{
  "userId": "user_id",
  "username": "example_user",
  "token": "jwt_token"
}

Update User
# Register User
- **Endpoint:** `/api/auth/updateProfile`
- **Method:** `POST`
- Request Body:

{
  "username": "example_user",
  "email": "user@example.com",
  "password": "example_password"
}
# Response:
{
  "userId": "user_id",
  "message": "user updated successfully"
}

### Recipe Management

## Create Recipe
- **Endpoint:** `/api/auth/login`
- **Method:** `POST`
- **Authorization**: `Bearer Token (JWT)`

- Request Body:
Request Body:
{
  "title": "Spaghetti Carbonara",
  "description": "Classic Italian pasta dish with eggs, cheese, and bacon",
  "ingredients": ["Spaghetti", "Eggs", "Parmesan cheese", "Bacon", "Black pepper", "Garlic"],
  "instructions": "..."
}
Response:
{
  "recipeId": "recipe_id",
  "title": "Spaghetti Carbonara",
  "description": "Classic Italian pasta dish with eggs, cheese, and bacon",
  "ingredients": ["Spaghetti", "Eggs", "Parmesan cheese", "Bacon", "Black pepper", "Garlic"],
  "instructions": "...",
  "userId": "user_id"
}

### Get Recipe by ID
- **Endpoint:** ` /api/recipes/:recipeId`
- **Method:** `GET`
- **Authorization**: `Bearer Token (JWT)`

# Response
{
  "recipeId": "recipe_id",
  "title": "Spaghetti Carbonara",
  "description": "Classic Italian pasta dish with eggs, cheese, and bacon",
  "ingredients": ["Spaghetti", "Eggs", "Parmesan cheese", "Bacon", "Black pepper", "Garlic"],
  "instructions": "...",
  "userId": "user_id"
}


### Update Recipe
- **Endpoint:** `/api/recipes/:recipeId`
- **Method:** `PUT`
- **Authorization**: `Bearer Token (JWT)`
  
Response:
{
  "recipeId": "recipe_id",
  "title": "Updated Title",
  "description": "Updated Description",
  "ingredients": ["Updated Ingredient 1", "Updated Ingredient 2"],
  "instructions": "Updated Instructions",
  "userId": "user_id"
}

## Delete Recipe
- **Endpoint:** ` /api/recipes/:recipeId`
- **Method:** `DELETE`
- **Authorization**: `Bearer Token (JWT)`
-Response:
{
  "message": "Recipe deleted successfully",
  "deletedRecipeId": "recipe_id"
}




### Object-Oriented Programming (OOP) Concepts
Encapsulation: The User and Recipe classes encapsulate data and behavior related to users and recipes, respectively. This allows for cleaner and more organized code.

Abstraction: The classes abstract away the complexities of interacting with the database by providing methods for CRUD operations. Users of the API only need to interact with these methods without needing to know the underlying implementation details.

Inheritance: Inheritance is not explicitly used in this project, but it could be implemented if there are common attributes or methods shared among different types of users or recipes.

Polymorphism: Polymorphism allows for flexibility in method implementations. For example, the createRecipe method can accept different parameters based on the recipe data provided.
