import React from 'react';
import {useHistory} from 'react-router';
import RecipeCard from './RecipeCard';
import Book from '../images/recipe-book.png';
import Edit from '../images/edit.png';
import Sneezy from '../images/sneezy.png';
import Search from '../images/search.png';
import Logout from '../images/logout.svg';

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

    const handleLogOut = () => {
        props.logOut()
    }

    const handleInput = (event) => {
        this.props.updateFilterState(event.target.value)
    }


    return (
        <div>
            <header className="header">
                <img src={Sneezy} alt="sneezing bread cartoon wearing glasses" className="header" id="sneezy"></img>
                <div className="header-wrapper">
                    <h1>impasta syndrome</h1>
                    <h2> a recipe app for those of us at wheat's end</h2>
                </div>
                <div className="search-bar">
                    <input type="text" onChange={handleInput} value={props.filter}></input>
                    <button id="search"></button>
                </div>
                <img src={Logout} alt="bread icon labelled 'log out'" id="bread" onClick={handleLogOut}></img>
            </header>
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