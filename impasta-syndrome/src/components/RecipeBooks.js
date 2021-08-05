import React from 'react';
import Book from '../images/brown-book.png';
import Sneezy from '../images/sneezy.png';
import Logout from '../images/logout.svg';
import {Link} from 'react-router-dom';

const RecipeBooks = (props) => {

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
            <h2 className="recipe-books">{props.user.username}'s cookbooks</h2>
            <div className="recipe-books">
                <Link to="/breakfast-recipes">
                    <img src={Book} alt="book-graphic" />
                    <h3>Breakfast</h3>
                </Link>
                <Link to="/lunch-recipes">
                    <img src={Book} alt="book-graphic" />
                    <h3>Lunch</h3>
                </Link>
                <Link to="/dinner-recipes">
                    <img src={Book} alt="book-graphic" />
                    <h3>Dinner</h3>
                </Link>
                <Link to="/dessert-recipes">
                    <img src={Book} alt="book-graphic" />
                    <h3>Dessert</h3>
                </Link>
                <Link to="/snack-recipes">
                    <img src={Book} alt="book-graphic" />
                    <h3>Snacks</h3>
                </Link>
            </div>
        </div>
    )
}

export default RecipeBooks;