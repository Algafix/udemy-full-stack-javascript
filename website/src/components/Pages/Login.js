import React, {Component} from 'react';
import Field from '../Common/Field.js';
import {withFormik} from 'formik';
import * as Yup from 'yup';

const fields = [
    {name: 'email', elementName: 'input', type: 'email', placeholder: 'Your email'},
    {name: 'password', elementName: 'input', type: 'password', placeholder: 'Your password'}
];

class Login extends Component {
    render() {
        return(
            <div className="login-page">
                <div className="container">
                    <div className="login-form">
                    <div>
                        <h1>Login</h1>
                    </div>
                        <div className="row">
                        <form onSubmit={this.props.handleSubmit}>
                            {fields.map((field, index) => {
                                return(

                                    <div className="col-md-12">

                                    <Field 
                                    key={index}
                                    {...field}
                                    vaule={this.props.values[field.name]}
                                    name={field.name}
                                    onChange={this.props.handleChange}
                                    onBlur={this.props.handleBlur}
                                    touched={(this.props.touched[field.name])}
                                    errors={this.props.errors[field.name]}
                                    />
                                    </div>
                                )
                            })}
                            <div className="col-md-12">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withFormik({
    mapPropsToValues: () => ({
        email: '',
        password: ''
    }),
    validationSchema: Yup.object().shape({
        email: Yup.string().email('Invalid email').required('You need to introduce and email.'),
        password: Yup.string().required('You need to introuce a password.')
    }),
    handleSubmit: (values, {setSubmitting}) => {
        console.log("Login attempt", values);
    }
})(Login);
