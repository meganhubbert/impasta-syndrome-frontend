import React, {Component} from 'react';
import Sneezy from '../images/sneezy.png';
import { Link } from 'react-router-dom';
import Bread from '../images/bread.jpg';
import Brownies from '../images/brownies.jpg';
import Cupcakes from '../images/cupcakes.jpg';
import Donuts from '../images/donuts.jpg';
import Empanadas from '../images/empanadas.jpg';
import Waffles from '../images/waffles.jpg';


class Form extends Component {

    state = {
        username: "",
        password: ""
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleSubmit(this.state)
    }

    handleChange = (e) => {
        let {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    render (){
        let {username, password} = this.state;
        let {formName} = this.props;
        let {formPar} = this.props;
        let {link} = this.props;

        return(
        <article className="container" id="login">
            <header className="login">
                <h1>impasta syndrome</h1>
                <h2> a recipe app for those of us at wheat's end</h2>
            </header>
            <main className="login">
                <img src={Sneezy} alt="sneezing bread cartoon wearing glasses" className="login"></img>
                <section className="login">
                    <h2 className="login">{formName}</h2>
                    <form className="login" onSubmit={this.handleSubmit}>
                        <label htmlFor="username">username</label> <br />
                        <input id="username" placeholder="username" autoComplete="off"
                            name="username" 
                            value={username}
                            onChange={this.handleChange}
                            />
                        <br />
                        <label htmlFor="pwd">password</label> <br />
                        <input id="pwd" type="password" autoComplete="off" placeholder="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                        />
                        <br />
                        <input className="form-submit" type="submit" value="submit"/>
                    </form>
                    <Link to={link}>{formPar}</Link>
                </section>
                <section className="social">
                    <h2 className="login">let's get social</h2>
                    <a target="_blank" href="https://www.instagram.com/impastasyndrome2021/" className="instagram-feed">
                        <img src={Waffles} alt="waffles"></img>
                        <img src={Cupcakes} alt="cupcakes"></img>
                        <img src={Bread} alt="bread"></img>
                        <img src={Donuts} alt="donuts"></img>
                        <img src={Empanadas} alt="empanadas"></img>
                        <img src={Brownies} alt="brownies"></img>
                    </a>
                    <div className="social-links">
                        <a target="_blank" href="https://twitter.com/impastasyndrom"><button id="twitter"></button></a>
                        <a target="_blank" href="https://www.instagram.com/impastasyndrome2021/"><button id="instagram"></button></a>
                        <a target="_blank" href="https://www.pinterest.com/Impastasyndrome"><button id="pinterest"></button></a>
                    </div>

                </section>
        </main>
        </article>
    )}
}

export default Form;