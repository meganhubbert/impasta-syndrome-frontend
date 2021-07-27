import React, {Component} from 'react';
import Header from './Header';
import RecipeCard from './RecipeCard';
import Book from '../images/recipe-book.png';
import Edit from '../images/edit.png';

export default function Home() {

    return (
        <div>
            <Header />
            {/* <Searchbar /> */}
            <div className="home-wrapper">
                <div className="welcome">
                    <h3>welcome back, username!</h3>
                    <img src={Book} alt="logo of a recipe book" />
                    <p>your recipe books</p>
                    <img src={Edit} alt="pencil" />
                    <p>create a new recipe</p>
                </div>
                <div className="recipe-collection">
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                </div>
            </div>
        </div>
    )
}