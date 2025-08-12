# Recipe Manager App - Backend Documentation

## Overview
The Recipe Manager App is a web application designed to help users manage their recipes efficiently. This backend documentation provides an overview of the backend architecture, setup instructions, and API endpoints.

## Features
- Add, edit, delete recipes
- Categorize recipes (Breakfast, Lunch, Dinner, etc.)
- Search and filter recipes
- Ingredient management with dynamic add/remove
- Recipe ratings and difficulty levels
- Prep/cook time tracking
- Shopping list generation from selected recipes
- User authentication and management

## Technologies Used
- Flask: A lightweight WSGI web application framework.
- SQLAlchemy: An ORM for database management.
- Flask-WTF: For form handling and validation.
- SQLite: A lightweight database for development.

## Project Structure
```
backend/
├── app/
│   ├── __init__.py       # Initializes the Flask application
│   ├── models.py         # Defines database models
│   ├── routes/           # Contains route definitions
│   │   ├── __init__.py   # Initializes routes
│   │   └── recipes.py     # RESTful API for recipes
│   ├── forms.py          # Defines forms for recipe submission
│   ├── utils.py          # Utility functions
│   └── templates/        # HTML templates
│       └── email_template.html
├── migrations/           # Database migration scripts
├── config.py             # Configuration settings
├── requirements.txt      # Python dependencies
└── README.md             # This documentation
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   cd recipe-manager-app/backend
   ```

2. Create a virtual environment:
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

4. Set up the database:
   ```
   flask db init
   flask db migrate
   flask db upgrade
   ```

5. Run the application:
   ```
   flask run
   ```

## API Endpoints
- **GET /api/recipes**: Retrieve a list of recipes.
- **POST /api/recipes**: Add a new recipe.
- **PUT /api/recipes/<id>**: Edit an existing recipe.
- **DELETE /api/recipes/<id>**: Delete a recipe.

## Contribution
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.