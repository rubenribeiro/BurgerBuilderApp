import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

import classes from './Burger.css';

const burger = (props) => {

    /*Transforming the ingredientst object "props" into an array:
    the Object.keys(props.ingredients) returns an array containing 
    the keys, i.e., the ingredient names. Using the map function on 
    this array, we construct a new array using the Array() function 
    by passing the number of times each ingredient must be added, 
    (which is the value in the original ingredients object passed as props)
     as the value. Then for each array of specific ingredients, 
     we return the JSX containing the BurgerIngredient component.*/
    
     const trasformedIngredients = Object.keys(props.ingredients)
                 .map(igKey => { 
                     return [...Array(props.ingredients[igKey])].map((_, i) => {
                          return <BurgerIngredient key={igKey + i} type={igKey} />
                 });
          });   
    
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {trasformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;