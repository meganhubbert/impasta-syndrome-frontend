import React, {Component} from 'react';
import Header from './Header';

export default class AddRecipeForm extends Component {

    state = {
        title: "",
        time: "",
        meal_type: "Breakfast",
        img: "",
        ingredients: [""],
        instructions: [""],
    }

    handleTitleInput = (e) => {
        e.preventDefault();
        this.setState({
            title: e.target.value
        })
    }

    handleTimeInput = (e) => {
        e.preventDefault();
        this.setState({
            time: e.target.value
        })
    }

    handleMealTypeInput = (e) => {
        e.preventDefault();
        this.setState({
            meal_type: e.target.value
        })
    }

    handleImgInput = (e) => {
        e.preventDefault();
        this.setState({
            img: e.target.value
        })
    }

    addIngredient = (e) => {
        e.preventDefault();
        this.setState({
            ingredients: [...this.state.ingredients, ""]
        })
    }

    updateIngredient = (newIngredient, index) => {
        let copy = [...this.state.ingredients]
        copy[index]= newIngredient
        this.setState({ingredients: copy})
    }

    addInstruction = (e) => {
        e.preventDefault();
        this.setState({
            instructions: [...this.state.instructions, ""]
        })
    }

    updateInstruction = (newInstruction, index) => {
        let copy = [...this.state.instructions]
        copy[index]= newInstruction
        this.setState({instructions: copy})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:3000/recipes", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "authorization": this.props.token
            },
            body: JSON.stringify({
                recipe_title: this.state.title,
                time: this.state.time,
                meal_type: this.state.meal_type,
                image: this.state.img,
                ingredient_list: this.state.ingredients,
                instruction_list: this.state.instructions
            })
        })
            .then(res => res.json())
            .then((recipe) => {
                if(recipe.id){
                    this.props.addRecipe(recipe)
                }
            })
    }

    render() {
        return (
        <div>
            <Header />
            <h2 className="recipe-form">Add New Recipe</h2>
            <form className="recipe-form" onSubmit={this.handleSubmit}>
                <label htmlFor="recipe-title">Recipe Title</label>
                <input id="recipe-title" name="recipe-title" type="text" value={this.state.title} onChange={this.handleTitleInput} />
                <br />
                <label htmlFor="time">Total Prep &amp; Cook Time:</label>
                <input id="time" name="time" type="number" value= {this.state.time} onChange={this.handleTimeInput}/>
                <br />
                <label htmlFor="meal_type">Meal Type</label>
                <select name="meal_type" id="meal_type" value={this.state.meal_type} onChange={this.handleMealTypeInput}>
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                    <option value="dessert">Dessert</option>
                    <option value="snack" defaultValue>Snack</option>
                </select>
                <br />
                <label htmlFor="image">Image URL</label>
                <input id="image" type="text" value={this.state.img} onChange={this.handleImgInput}  />
                <br />
                <label htmlFor="ingredients">Ingredients</label>
                <ul id="ingredients">
                    {
                        this.state.ingredients.map((ingredient, index) => {
                            return(<li key={index}><input type="text" value={ingredient} onChange={(e)=>{this.updateIngredient(e.target.value, index)}}/></li>)
                        })
                    }

                </ul>
                <button onClick={this.addIngredient}>+</button>
                <br />
                <label htmlFor="instructions">Instructions</label>
                <ul id="instructions">
                    {
                        this.state.instructions.map((instruction, index) => {
                            return(<li key={index}><input type="text" value={instruction} onChange={(e)=>{this.updateInstruction(e.target.value, index)}}/></li>)
                        })
                    }
                </ul>
                <button onClick={this.addInstruction}>+</button>
                <br />
                <input type="submit" value="add recipe" />
            </form>
        </div>
    )}
}