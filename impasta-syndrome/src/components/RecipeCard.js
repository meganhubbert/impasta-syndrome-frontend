import React, {useState} from 'react';
import Modal from 'react-modal';
import Edit from '../images/edit.png';

const RecipeCard = (props) => {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const setModalIsOpenToTrue =()=>{
    setModalIsOpen(true)
  }

  const setModalIsOpenToFalse =(e)=>{
    e.stopPropagation()
    console.log("hello")
    setModalIsOpen(false)
  }

  const renderIngredientsList = () => {
    if (props.recipe){
    return props.recipe.ingredient_list.map((ingredient, index) => <li key={index}>{ingredient}</li>)
    }
  }

  const renderInstructionsList = () => {
    if (props.recipe){
    return props.recipe.instruction_list.map((instruction, index) => <li key={index}>{instruction}</li>)
    }
  }

  let handleDelete = () => {

    fetch(`http://localhost:3000/recipes/${props.recipe.id}`, {
        method: "DELETE",
        headers: {
            "authorization": localStorage.token
        }
    })
    
  }

  console.log(modalIsOpen)
  const showRecipeCard = () =>{
      if (props.recipe){
          return <div className="recipe-card" onClick={setModalIsOpenToTrue}>
          <h4>{props.recipe.recipe_title}</h4>
          <img src={props.recipe.image}/>
          <p>click to see recipe details</p>
          <Modal isOpen={modalIsOpen} onRequestClose={()=> setModalIsOpen(false)}>
            <button onClick={setModalIsOpenToFalse}>x</button>
            <div className="modal-wrapper">
              <div className="column-one">
                <h4 className="modal">{props.recipe.recipe_title}</h4>
                <img src={props.recipe.image} alt={props.recipe.recipe_title} className="modal"/>
              </div>
              <div className="column-two">
                <p className="modal">cook time: {props.recipe.time} minutes</p>
                <p className="modal">ingredients:</p>
                <ul className="modal">
                  {renderIngredientsList()}
                </ul>
                <p className="modal">instructions:</p>
                <ol className="modal">
                  {renderInstructionsList()}
                </ol>
                <div className="button-wrapper">
                  <button className="modal" id="edit">edit</button>
                  <button className="modal" id="delete" onClick={handleDelete}>delete</button>
                </div>
              </div>
            </div>
          </Modal>
          </div>
      }else{
        return <div>
          <h3>i got muffin</h3>
        </div>
      }
    } 

    return (
        <div>
        {showRecipeCard()}
        </div>
    )
};

export default RecipeCard;