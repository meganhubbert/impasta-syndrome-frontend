import React, {Component} from 'react';
import Sneezy from '../images/sneezy.png';
import Bread from '../images/bread.png';

export default function Header() {

    return (
        <header className="header">
            <img src={Sneezy} alt="sneezing bread cartoon wearing glasses" className="header" id="sneezy"></img>
            <div className="header-wrapper">
                <h1>impasta syndrome</h1>
                <h2> a recipe app for those of us at wheat's end</h2>
            </div>
            <img src={Bread} alt="bread icon" id="bread"></img>
        </header>
    )
}