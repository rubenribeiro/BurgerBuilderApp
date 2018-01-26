import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            stret: '',
            postalCode: ''
        },
        loading: false
    }
    
    orderHandler = (evt) => {
        evt.preventDefault();
        
        //Changer order summary content to Loading..(spinner)
        this.setState({loading: true});
        const order = {
            ingredients: this.state.ingredients,
            price: this.props.price,
            customer: {
                name: "Jon Doe",
                address: {
                    street: 'Test Street 123',
                    zipCode: '41351',
                    country: 'US',                    
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(response => {
                //Stop loading spinner
                //Purchasing false to close the modal
                this.setState({loading: false});
            })
            .catch(error => {
                //Stop loading spinner
                // Purchasing false to close the modal
                this.setState({loading: false});
            });

            
     

        console.log(this.props.ingredients);
    }

    render () {
        return (
            <div className={classes.ContactData}>
                <h4>Enter Your Contact Data</h4>
                <form>
                    <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
                    <input className={classes.Input} type="text" name="email" placeholder="Your Email" />
                    <input className={classes.Input} type="text" name="street" placeholder="Street" />
                    <input className={classes.Input} type="text" name="postal" placeholder="Postal Code" />
                    <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
                </form>
            </div>
        );
    }
} 

export default ContactData;