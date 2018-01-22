import React from 'react';

import Utility from '../../../hoc/Utility';

const orderSummary = (props) => {
    /* expected Output from ingredient Summary Object
     <li>Salad: 1 </li> */
   const ingredientSummary = Object.keys(props.ingredients)
          .map(igKey => {
          return (<li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                 </li>);
          });
  
    
    
   return (
       <Utility>
           <h3>Your Order</h3>
           <p>A delicious burger with the following ingredients:</p>
           <ul>
                {ingredientSummary}
           </ul>
           <p>Continue to Checkout?</p>
       </Utility>
   );

};

export default orderSummary;