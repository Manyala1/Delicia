import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import RecipeDetail from './pages/RecipeDetail';
import RecipeForm from './components/RecipeForm';
import ShoppingList from './components/ShoppingList';
import FlashMessage from './components/FlashMessage';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <FlashMessage />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/recipe/:id" component={RecipeDetail} />
                    <Route path="/add-recipe" component={RecipeForm} />
                    <Route path="/shopping-list" component={ShoppingList} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;