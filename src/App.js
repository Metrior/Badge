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
            job: '',
        };

    }

    sendDataFromForm = (object) => {
        this.props.createUser(object);
        object.preventDefault();
    }



        render() {
            const {handleSubmit} = this.props.return (
                <form onSubmit={this.sendDataFromForm}>
                    <div>
                        <label>Name</label>
                        <div>
                            <Field
                                name="firstName"
                                component="input"
                                type="text"
                                placeholder="Name"
                            />
                        </div>
                    </div>
                    <div>
                        <label>Job</label>
                        <div>
                            <Field name="job" component="select">
                                <option value="Manager">Manager</option>
                                <option value="Driver">Driver</option>
                            </Field>
                        </div>
                    </div>
                    <button type="submit" disabled={this.state.name.length > 20 || this.state.name.match(!/^[A-Za-z]+$/)}>
                        Submit
                    </button>
                </form>
            );
        }
}

App = reduxForm({
    form: 'badge'
})(App)

const mapStateToProps = (state) => {
    return {
        data: state,
    }
};



const mapDispatchToProps = (dispatch) => {
    return {
        createUser: (user) => dispatch(createUser(user)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App)

