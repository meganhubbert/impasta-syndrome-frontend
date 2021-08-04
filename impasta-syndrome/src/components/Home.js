import React from 'react';
import {useHistory} from 'react-router';
import Header from './Header';
import RecipeCard from './RecipeCard';
import Book from '../images/recipe-book.png';
import Edit from '../images/edit.png';

const Home = (props) => {

    const history = useHistory();

    const showRecipeCards = () =>{
        if (props.user.recipes){
            return props.user.recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} deleteRecipe={props.deleteRecipe}/>)
        }
    }

    const handleCreateRecipeClick = () => {
        history.push("/new-recipe")
    }

    return (
        <div>
            <Header logOut={props.logOut} />
            {/* <Searchbar /> */}
            <div className="home-wrapper">
                <div className="welcome">
                    <h3>welcome back, {props.user.username}!</h3>
                    <img src={Book} alt="logo of a recipe book" />
                    <p>your recipe books</p>
                    <img src={Edit} alt="pencil" onClick={handleCreateRecipeClick} />
                    <p>create a new recipe</p>
                </div>
                <div className="recipe-collection">
                    {showRecipeCards()}
                </div>
            </div>
        </div>
    )
}

export default Home;