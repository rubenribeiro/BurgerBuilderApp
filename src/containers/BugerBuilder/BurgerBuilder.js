import React, { Component } from 'react';
import Utility from '../../hoc/Utility';
import Burger from '../../components/Burger/Buger'

class BurgerBuilder extends Component {
    //Alternative for using state
    /*constructor(props){
        super(props);
        this.state = {"..."};        
    }*/

    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        }
    }

    render () {
        return (
            <Utility>
                <Burger ingredients={this.state.ingredients} />
                <div>Build Controls</div>
            </Utility>
        );
    }
}

export default BurgerBuilder;