import React from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from './RecipeCard';
import Sneezy from '../images/sneezy.png';
import Logout from '../images/logout.svg';

const LunchBook = (props) => {

    let lunchRecipes = props.user.recipes.filter(recipe => recipe.meal_type == "lunch")

    const showRecipeCards = () =>{
        if (props.user.recipes){
            return lunchRecipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} deleteRecipe={props.deleteRecipe}/>)
        }
    }

    const handleLogOut = () => {
        props.logOut()
    }

    return (
        <div>
            <header className="header">
                <Link to="/home"><img src={Sneezy} alt="sneezing bread cartoon wearing glasses" className="header" id="sneezy"></img></Link>
                <div className="header-wrapper">
                    <h1>impasta syndrome</h1>
                    <h2> a recipe app for those of us at wheat's end</h2>
                </div>
                <img src={Logout} alt="bread icon labelled 'log out'" id="bread" onClick={handleLogOut}></img>
            </header>
            <div className="recipe-book-wrapper">
                <h2 className="recipe-books">what's for lunch, {props.user.username}?</h2>
                <div className="recipe-book-collection">
                    {showRecipeCards()}
                </div>
            </div>
        </div>
    )
}

export default LunchBook;