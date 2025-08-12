import React from 'react';
import RecipeList from '../components/RecipeList';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <h1>Welcome to the Recipe Manager</h1>
            <p>Discover, create, and manage your favorite recipes.</p>
            <RecipeList />
        </div>
    );
};

export default Home;