import React from 'react';
import FormInput from './FormInput';
import CustomButton from './CustomButton';
import { Link, useNavigate } from 'react-router-dom';

// 0, null, NaN, '', undefined, false === false

const initailValues = {
  name: '',
  email: '',
  password: '',
  nameError: '',
  emailError: '',
  passwordError: ''
}


class Signup extends React.Component {
  

  constructor(props) {
    super(props);
    this.state = initailValues;
    
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  validate = () => {
    let {name, email, password, nameError, emailError, passwordError} = this.state;

    // name
    if(name.length===0) {
      nameError = 'This field cann\'t be empty';
    } else {
      nameError = '';
    }

    // email
    if(!email.includes('@')) {
      emailError = '@ is missing';
    } else {
      emailError = '';
    }

    // password
    if(password.length<8) {
      passwordError = 'length should be atleast 8';
    } else {
      passwordError = '';
    }

    if(nameError || emailError || passwordError) {
      this.setState({nameError, emailError, passwordError});
      return false;
    }

    this.setState({nameError, emailError, passwordError})
    return true;
  }

  handleSubmit = (event) => {
    const navigate = useNavigate();
    event.preventDefault();

    let isValid = this.validate();

    if(isValid) {
      console.log(this.state);   
      this.setState(initailValues);
      navigate('/recipe');
    } else {
      console.log('Data is not valid');
    }

  }

  render() {
    return (
      <div className='login-form'>
          <h1 className='title'>Sign Up</h1>
          <span>Sign up with your email and password</span>
          <form onSubmit={this.handleSubmit}>
            
            <FormInput  type={'text'} name={'name'} placeholder={'Name'} value={this.state.name} handleChange={this.handleChange} />
            <span className='error-message'>{this.state.nameError}</span>

            <FormInput  type={'text'} name={'email'} placeholder={'Email'} value={this.state.email} handleChange={this.handleChange} />
            <span className='error-message'>{this.state.emailError}</span>

            <FormInput  type={'password'} name={'password'} placeholder={'Password'} value={this.state.password} handleChange={this.handleChange} />
            <span className='error-message'>{this.state.passwordError}</span>

            <CustomButton type={'submit'}>Signup</CustomButton>
          </form>
          <h4>Already have an account?
            <Link to='/login'>Login</Link>
          </h4>
      </div>
    );
  }
  
}

export default Signup;