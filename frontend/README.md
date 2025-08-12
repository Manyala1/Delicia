# Recipe Manager App - Frontend

This is the frontend part of the Recipe Manager application, built using React. The application allows users to manage their recipes efficiently, providing features such as adding, editing, deleting recipes, and generating shopping lists.

## Features

- **Recipe Management**: Add, edit, and delete recipes with ease.
- **Categorization**: Organize recipes into categories like Breakfast, Lunch, and Dinner.
- **Search and Filter**: Quickly find recipes based on ingredients or categories.
- **Shopping List Generation**: Create shopping lists based on selected recipes.
- **Responsive Design**: The application is built with a mobile-responsive layout using Bootstrap.

## Project Structure

```
frontend
├── public
│   └── index.html          # Main HTML file
├── src
│   ├── components          # React components
│   │   ├── RecipeList.jsx
│   │   ├── RecipeForm.jsx
│   │   ├── ShoppingList.jsx
│   │   ├── Navbar.jsx
│   │   └── FlashMessage.jsx
│   ├── pages               # Page components
│   │   ├── Home.jsx
│   │   └── RecipeDetail.jsx
│   ├── App.jsx             # Main application component
│   ├── index.js            # Entry point for React application
│   └── styles              # CSS styles
│       └── main.css
├── package.json            # npm configuration file
└── README.md               # Frontend documentation
```

## Getting Started

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd recipe-manager-app/frontend
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the application**:
   ```
   npm start
   ```

The application will be available at `http://localhost:3000`.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for details.