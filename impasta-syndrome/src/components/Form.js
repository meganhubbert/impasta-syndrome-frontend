import React, {Component} from 'react';
import Sneezy from '../images/sneezy.png';
import { Link } from 'react-router-dom';

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

    handleClick = (e) => {
        
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
        </main>
        </article>
    )}
}

export default Form;