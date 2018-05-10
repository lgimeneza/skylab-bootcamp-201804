import React, { Component } from "react";
import "../Main/main.css";
import logic2 from "../../logic/cocktaillogic";

/**
 * The Home page where the user lands once the login process is made.
 *
 * @function Home
 * @returns {function} - a dummy component that prints the Home page.
 */
function Home(props) {
  return (
    <div className="container">
      <section className="firstSection">
        <button className="button" onClick={props._handlerShowCocktail}>
          Get Your Cocktail of The Day
        </button>
        <h2>{props.cocktailRandomData.strDrink}</h2>
        <p>{props.cocktailRandomData.strInstructions}</p> 
        <h3>{props.cocktailRandomData.strCategory}</h3> 
        <h3>{props.cocktailRandomData.strAlcoholic}</h3>
        <h3>{props.cocktailRandomData.strGlass}</h3> 
        {(props.cocktailRandomData.strIngredient1) ? <h2>Cocktail ingredients:</h2> : ''} 
        {(props.cocktailRandomData.strIngredient1) ? <p>{props.cocktailRandomData.strIngredient1}: {props.cocktailRandomData.strMeasure1}</p> : ''}
        {(props.cocktailRandomData.strIngredient2) ? <p>{props.cocktailRandomData.strIngredient2}: {props.cocktailRandomData.strMeasure2}</p> : ''}
        {(props.cocktailRandomData.strIngredient3) ? <p>{props.cocktailRandomData.strIngredient3}: {props.cocktailRandomData.strMeasure3}</p> : ''}
        {(props.cocktailRandomData.strIngredient4) ? <p>{props.cocktailRandomData.strIngredient4}: {props.cocktailRandomData.strMeasure4}</p> : ''}
        {(props.cocktailRandomData.strIngredient5) ? <p>{props.cocktailRandomData.strIngredient5}: {props.cocktailRandomData.strMeasure5}</p> : ''}
        </section>
        <section className="secondSection">
          <img className="cocktailImg" src={props.cocktailRandomData.strDrinkThumb} alt={props.cocktailRandomData.strDrink}/>
        </section>
    </div>
  );
}

export default Home;