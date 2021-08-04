import React from 'react';
import Sneezy from '../images/sneezy.png';
import { Link } from 'react-router-dom';


const Header = () => {

    return (
        <header className="header">
            <Link to="/home">
                <img src={Sneezy} alt="sneezing bread cartoon wearing glasses" className="header" id="sneezy" />
            </Link>
            <div className="header-wrapper">
                <h1>impasta syndrome</h1>
                <h2> a recipe app for those of us at wheat's end</h2>
            </div>
        </header>
    )
}

export default Header;