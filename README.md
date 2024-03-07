# Recipe Sharing Platform API
This API provides endpoints for managing recipes and user authentication on a recipe sharing platform.

## Deployment

The project is deployed and can be accessed at [https://recipie-sharing-1.onrender.com](https://recipie-sharing-1.onrender.com).
You can use the following APIs to interact with the system.

## Models

### User Class

Represents individuals who interact with the platform. It includes methods for user authentication, profile management, and interaction with recipes.

### Recipe Class

Contains details of a recipe, including title, description, ingredients, instructions, and optional images. It includes methods for CRUD operations on recipes.

## Functionality

### User Class Functionality

- **User Registration**: Method for registering new users.
- **User Login**: Method for authenticating users.
- **Profile Management**: Methods for updating user profiles.
- **Authentication Mechanisms**: Implements JWT token generation and validation for secure authentication.

### Recipe Class Functionality

- **CRUD Operations**: Methods for creating, reading, updating, and deleting recipes.
- **Validation and Error Handling**: Ensures proper validation and error handling for recipe-related operations.
- **Encapsulation**: Utilizes encapsulation to interact with the database within the Recipe class methods.

## Documentation

### Setup Instructions

1. Clone the repository to your local machine.
2. Install dependencies using `npm install`.
3. Set up your database and configure the connection in the `config.js` file.
4. Run the server using `npm start`.

### API Endpoints

#### User Endpoints

- `POST /api/user/register`: Register a new user.
- `POST /api/user/login`: Login as an existing user.
- `PUT /api/user/updateuser/:id`: Update user profile information.

#### Recipe Endpoints

- `GET /api/recipe/:userId`: Get recipes associated with a user.
- `POST /api/recipe`: Create a new recipe.
- `GET /api/recipe/:recipieId`: Get details of a recipe by ID.
- `GET /api/recipe`: Get all recipes.
- `PUT /api/recipe/:recipieId`: Update an existing recipe.
- `DELETE /api/recipe/:recipieId`: Delete a recipe by ID.

### Examples

#### User Registration

```http
POST /api/user/register
Content-Type: application/json

{
  "username": "example_user",
  "email": "user@example.com",
  "password": "password123"
}




POST /api/user/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}



PUT /api/user/updateuser/123
Content-Type: application/json

{
  "username": "new_username",
  "email": "new_email@example.com"
}



POST /api/recipe
Content-Type: application/json

{
  "title": "Delicious Pasta",
  "description": "A classic pasta dish with a rich tomato sauce.",
  "ingredients": ["pasta", "tomatoes", "garlic", "olive oil"],
  "instructions": "1. Cook pasta according to package instructions. 2. Heat olive oil in a pan, add minced garlic and tomatoes. 3. Mix in cooked pasta. 4. Serve hot.",
  "image": "https://example.com/pasta_image.jpg"
}


PUT /api/recipe/123
Content-Type: application/json

{
  "title": "Spicy Pasta",
  "description": "A fiery version of the classic pasta dish with extra chili.",
  "ingredients": ["pasta", "tomatoes", "garlic", "chili", "olive oil"],
  "instructions": "1. Cook pasta according to package instructions. 2. Heat olive oil in a pan, add minced garlic, tomatoes, and chili. 3. Mix in cooked pasta. 4. Serve hot.",
  "image": "https://example.com/spicy_pasta_image.jpg"
}




OOP Concepts Utilization
Encapsulation: Classes encapsulate related functionality and data, providing a clear interface for interaction.
Abstraction: Users interact with the API through high-level methods, abstracting away complex implementation details.
Modularity: Separation of concerns between User and Recipe classes allows for easier maintenance and scalability.
Inheritance: If applicable, inheritance could be utilized for extending functionality, such as different types of recipes inheriting from a base Recipe class.
