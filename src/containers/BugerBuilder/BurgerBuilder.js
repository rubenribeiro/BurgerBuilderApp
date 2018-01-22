import React, { Component } from 'react';
import Utility from '../../hoc/Utility';
import Burger from '../../components/Burger/Buger';  
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {
    //Alternative for using state
    /*constructor(props){
        super(props);
        this.state = {"..."};        
    }*/

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 6
        }
    }

    render () {
        return (
            <Utility>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls />
            </Utility>
        );
    }
}

export default BurgerBuilder;