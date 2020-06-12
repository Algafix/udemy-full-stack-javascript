import React, {Component} from 'react';
import Field from '../Common/Field.js';
import {withFormik} from 'formik';
import * as Yup from 'yup';

const fields = [
    [
      {name: 'name', elementName: 'input', type: 'text', placeholder: 'Your name*'},
      {name: 'email', elementName: 'input', type: 'email', placeholder: 'Your email*'},
      {name: 'phone', elementName: 'input', type: 'text', placeholder: 'Your phone number*'} 
    ],
    [
      {name: 'message', elementName: 'textarea', type: 'text', placeholder: 'Type your message*'}
    ]
  ]
  


class Contact extends Component {
    render() {
        return(
          <section id="contact">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h2 className="section-heading text-uppercase">Contact Us</h2>
                  <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <form onSubmit={this.props.handleSubmit} name="sentMessage" noValidate="novalidate">
                    <div className="row">
                      {fields.map((section, sectionIndex) =>{
                        return(
                          <div className="col-md-6" key={sectionIndex}>
                            {section.map((field, index) => {
                              return <Field 
                                        {...field} 
                                        key={index}
                                        value={this.props.values[field.name]}
                                        name={field.name}
                                        onChange={this.props.handleChange}
                                        onBlur={this.props.handleBlur}
                                        touched={(this.props.touched[field.name])}
                                        errors={this.props.errors[field.name]}
                                        />
                            })}
                          </div>
                        );
                      })}
                      <div className="clearfix"></div>
                      <div className="col-lg-12 text-center">
                        <div id="success"></div>
                        <button 
                          id="sendMessageButton" 
                          className="btn btn-primary btn-xl text-uppercase" 
                          type="submit"
                        >Send Message</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default withFormik({
  mapPropsToValues: () => ({
    name: '',
    phone:'',
    email:'',
    message:'',
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string().min(3,"Poco texto").required("You must give us your name."),
    email: Yup.string().email("Aix casi, pon tu email").required("You must give us your email."),
    phone: Yup.string()
        .min(10, 'Please provide your 9 digits phone number')
        .max(15, 'Too long')
        .required('We need to contact u'),
    message: Yup.string().min(10, "You have to give us more detailed information")
        .required("We want to know!")
  }),
  handleSubmit: (values, {setSubmitting}) => {
    alert("You've submitted the form.");
  }
})(Contact);