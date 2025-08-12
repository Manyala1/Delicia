import React, { useState } from 'react';

const RecipeForm = ({ onSubmit, initialData }) => {
    const [title, setTitle] = useState(initialData ? initialData.title : '');
    const [category, setCategory] = useState(initialData ? initialData.category : '');
    const [ingredients, setIngredients] = useState(initialData ? initialData.ingredients : ['']);
    const [instructions, setInstructions] = useState(initialData ? initialData.instructions : '');
    const [prepTime, setPrepTime] = useState(initialData ? initialData.prepTime : '');
    const [cookTime, setCookTime] = useState(initialData ? initialData.cookTime : '');
    const [servings, setServings] = useState(initialData ? initialData.servings : 1);
    const [difficulty, setDifficulty] = useState(initialData ? initialData.difficulty : 'Easy');

    const handleIngredientChange = (index, value) => {
        const newIngredients = [...ingredients];
        newIngredients[index] = value;
        setIngredients(newIngredients);
    };

    const addIngredient = () => {
        setIngredients([...ingredients, '']);
    };

    const removeIngredient = (index) => {
        const newIngredients = ingredients.filter((_, i) => i !== index);
        setIngredients(newIngredients);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const recipeData = {
            title,
            category,
            ingredients,
            instructions,
            prepTime,
            cookTime,
            servings,
            difficulty,
        };
        onSubmit(recipeData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div>
                <label>Category:</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)} required>
                    <option value="">Select Category</option>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                    <option value="Snack">Snack</option>
                </select>
            </div>
            <div>
                <label>Ingredients:</label>
                {ingredients.map((ingredient, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            value={ingredient}
                            onChange={(e) => handleIngredientChange(index, e.target.value)}
                            required
                        />
                        <button type="button" onClick={() => removeIngredient(index)}>Remove</button>
                    </div>
                ))}
                <button type="button" onClick={addIngredient}>Add Ingredient</button>
            </div>
            <div>
                <label>Instructions:</label>
                <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} required />
            </div>
            <div>
                <label>Prep Time:</label>
                <input type="text" value={prepTime} onChange={(e) => setPrepTime(e.target.value)} required />
            </div>
            <div>
                <label>Cook Time:</label>
                <input type="text" value={cookTime} onChange={(e) => setCookTime(e.target.value)} required />
            </div>
            <div>
                <label>Servings:</label>
                <input type="number" value={servings} onChange={(e) => setServings(e.target.value)} min="1" required />
            </div>
            <div>
                <label>Difficulty:</label>
                <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)} required>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
            </div>
            <button type="submit">Submit Recipe</button>
        </form>
    );
};

export default RecipeForm;