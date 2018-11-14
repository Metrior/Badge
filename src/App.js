import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Field, reduxForm } from 'redux-form'

//@ACTIONS
import { createUser } from './actions/actions';

class App extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
        };
        this.handleChange = this.handleChange.bind(this)
    }

    sendDataFromForm = (object) => {
        this.props.createUser(object);
        object.preventDefault();
    }

    handleChange = e => {
        this.setState({ name: e.target.value})
    };

        render() {

            return (


                <form onSubmit={this.sendDataFromForm}>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <Field name="name" component="input" type="text" onChange={this.handleChange}/>
                    </div>
                    <button type="submit">SEND</button>
                </form>
            );
        }
}

App = reduxForm({
    form: 'badge'
})(App)

const mapStateToProps = (state) => {
    return {
        data: state
    }
};



const mapDispatchToProps = (dispatch) => {
    return {
        createUser: (user) => dispatch(createUser(user)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App)

