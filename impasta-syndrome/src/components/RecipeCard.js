import React from 'react';
import Muffins from '../images/muffins.jpg';
import Edit from '../images/edit.png';

export default function RecipeCard() {

    return (
        <div className="recipe-card">
            <h4>Blueberry Muffins</h4>
            <img src={Muffins} alt="blueberry muffins" />
            <p>click to see recipe details</p>
        </div>
    )
}