import React from 'react';

const ShoppingList = ({ selectedRecipes }) => {
    const generateShoppingList = () => {
        const ingredientMap = {};

        selectedRecipes.forEach(recipe => {
            recipe.ingredients.forEach(ingredient => {
                const { name, quantity } = ingredient;
                if (ingredientMap[name]) {
                    ingredientMap[name] += quantity;
                } else {
                    ingredientMap[name] = quantity;
                }
            });
        });

        return Object.entries(ingredientMap).map(([name, quantity]) => (
            <li key={name}>
                {quantity} x {name}
            </li>
        ));
    };

    return (
        <div className="shopping-list">
            <h2>Shopping List</h2>
            <ul>
                {generateShoppingList()}
            </ul>
        </div>
    );
};

export default ShoppingList;