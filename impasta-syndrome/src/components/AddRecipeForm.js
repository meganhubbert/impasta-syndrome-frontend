import React, {Component} from 'react';
import Header from './Header';

export default function AddRecipeForm() {

    return (
        <div>
            <Header />
            <h2>Add New Recipe</h2>
            <form className="recipe-form">
                <label>Recipe Title</label>
                <input id="recipe-title" type="text" placeholder="Blueberry Muffins" required />
                <br />
                <label>Total Prep &amp; Cook Time:</label>
                <input id="time" type="number" placeholder="5" />
                <br />
                <label>Meal Type</label>
                <select name="type" id="type">
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                    <option value="dessert">Dessert</option>
                    <option value="snack" selected>Snack</option>
                </select>
                <br />
                <label>Image URL</label>
                <input id="image" type="text" placeholder="blueberrymuffin.jpg" />
                <br />
                <h3>Ingredients</h3>
                <label></label>
                <h3>Instructions</h3>
            </form>
        </div>
    )
}