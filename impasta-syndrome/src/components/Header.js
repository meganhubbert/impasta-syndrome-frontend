import React from 'react';
import Sneezy from '../images/sneezy.png';
import {withRouter} from 'react-router-dom';


const Header = () => {

    const handleClick = () => {
        this.props.history.push('/home')
    }

    return (
        <header className="header">
            <img src={Sneezy} alt="sneezing bread cartoon wearing glasses" className="header" id="sneezy" onClick={handleClick} />
            <div className="header-wrapper">
                <h1>impasta syndrome</h1>
                <h2> a recipe app for those of us at wheat's end</h2>
            </div>
        </header>
    )
}

export default withRouter(Header);