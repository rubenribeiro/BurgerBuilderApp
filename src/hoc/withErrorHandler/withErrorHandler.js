import React, {Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Utility from '../Utility/Utility';

const withErrorHandler = (WrappedComponent, axios) => {
   return class extends Component {
       state = {
           error: null
       }
       componentDidMount () {
           axios.interceptors.request.use( req => {
               this.setState({error: null });
           });
           axios.interceptors.response.use(null, error => {
                 this.setState({error: error})
           });
       }
         
       errorConfirmedHandler = () => {
           this.setState({error: null})
       }

       render () {
           return (
                <Utility>
                <Modal show={this.state.error}
                       clicked={this.errorConfirmedHandler}>
                       {this.state.error.message}
                </Modal>
                <WrappedComponent {...this.props} />
            </Utility>
           );
       }
   } 
}

export default withErrorHandler;