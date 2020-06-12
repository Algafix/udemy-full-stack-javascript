import React, {Component} from 'react';
import Field from '../Common/Field.js';
import {withFormik} from 'formik';

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
    
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            phone: '',
            message: ''
        }
    }
    

    submitForm = (e) => {
      alert("Form submited, thxxxx");
    }


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
                  <form onSubmit={e => this.submitForm(e)} name="sentMessage" noValidate="novalidate">
                    <div className="row">
                      {fields.map((section, sectionIndex) =>{
                        return(
                          <div className="col-md-6" key={sectionIndex}>
                            {section.map((field, index) => {
                              return <Field 
                                        {...field} 
                                        key={index} 
                                        value={this.state[field.name]} 
                                        onChange={e => this.setState({[field.name]: e.target.value})}
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
  validate: values => {
    const errors = {};

    Object.keys(values).map(v => {
      if(!values[v]){
        errors[v] = "Required";
      }
    })
    return errors;
  },
  handleSubmit: (values, {setSubmitting}) => {
    alert("You've submitted the form");
  }
})(Contact);