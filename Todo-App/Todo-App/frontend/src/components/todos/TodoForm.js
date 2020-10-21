import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

class TodoForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            status: this.props.isComplete ? this.props.isComplete.status : false,
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    renderField = ({ input, label, meta: { touched, error } }) => {
        return (
            <div className={`field ${touched && error ? 'error' : ''}`}>
                <label>{label}</label>
                <input {...input} autoComplete='off' />
                {touched && error && (
                    <span className='ui pointing red basic label'>{error}</span>
                )}
            </div>
        );
    };

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.props.isComplete.status = value;
        this.setState({
            [name]: value
        });
    }

    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    };

    render() {
        const btnText = `${this.props.initialValues ? 'Update' : 'Add'}`;
        return (
            <div className='ui segment'>
                <form
                    onSubmit={this.props.handleSubmit(this.onSubmit)}
                    className='ui form error'
                >

                    <Field name='task' component={this.renderField} label='Task'  />

                    {this.props.initialValues &&
                        <div>
                            <label htmlFor="status">
                                Status
                            </label>
                        <Field name="status"  component="input" checked={this.props.isComplete.status}   onChange={ this.handleInputChange }
                               type="checkbox" />
                        </div>
                    }
                    <br/>
                    <Button color="primary"  type="submit" variant="contained" bgcolor="background.paper"
                    >{btnText}</Button>
                </form>
            </div>
        );
    }
}

const validate = formValues => {
    const errors = {};

    if (!formValues.task) {
        errors.task = 'Please enter at least 1 character';
    }

    return errors;
};

export default reduxForm({
    form: 'todoForm',
    touchOnBlur: false,
    validate
})(TodoForm);