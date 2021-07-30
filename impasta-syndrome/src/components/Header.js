import React from 'react';
import Sneezy from '../images/sneezy.png';
import Logout from '../images/logout.svg';

const Header = (props) => {

    const handleLogOut = () => {
        props.logOut()
    }

    return (
        <header className="header">
            <img src={Sneezy} alt="sneezing bread cartoon wearing glasses" className="header" id="sneezy"></img>
            <div className="header-wrapper">
                <h1>impasta syndrome</h1>
                <h2> a recipe app for those of us at wheat's end</h2>
            </div>
            <img src={Logout} alt="bread icon labelled 'log out'" id="bread" onClick={handleLogOut}></img>
        </header>
    )
}

export default Header;