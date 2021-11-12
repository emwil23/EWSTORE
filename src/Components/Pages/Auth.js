import React from 'react';
import { connect } from 'react-redux';
import { logIn, logOut } from '../../actions';
// import axios from 'axios';

// import { Field, reduxForm } from 'redux-form';

class Auth extends React.Component {
  // state = { token: '' };
  componentDidMount() {
    this.props.logOut();
    console.log('On Mount ' + this.props.token);
  }

  componentDidUpdate() {
    // this.nextPage(this.state.token);
    // this.props.logIn('');
    console.log('On Update ' + this.props.token);
  }

  /* getToken = () => {
    axios
      .post('https://fakestoreapi.com/auth/login', {
        username: 'mor_2314',
        password: '83r5^_',
      })
      .then((res) => {
        this.props.logIn(res.data.token);
        console.log(res.data.token);
        // this.setState({ token: res.data.token });
      })
      .catch((err) => console.log(err));
  }; */

  /* OnSubmit = (event) => {
    event.preventDefault();
    axios
      .post('https://fakestoreapi.com/auth/login', {
        username: `${event.target.username.value}`,
        password: `${event.target.password.value}`,
      })
      .then((res) => this.props.logIn(res.data.token));
  }; */
  //For Async Action
  OnSubmit = (event) => {
    event.preventDefault();

    const values = {
      username: `${event.target.username.value}`,
      password: `${event.target.password.value}`,
    };

    this.props.logIn(values);
  };

  render() {
    return (
      <div
        className='ui raised very padded text container inverted segment'
        style={{ marginTop: '20px' }}
      >
        <form className='ui form' onSubmit={this.OnSubmit}>
          <div className='field'>
            <label>username: </label>
            <input
              type='text'
              name='username'
              placeholder='username'
              value='mor_2314'
              readOnly={true}
            />
          </div>
          <div className='field'>
            <label>password: </label>
            <input
              type='text'
              name='password'
              placeholder='password'
              value='83r5^_'
              readOnly={true}
            />
          </div>
          <button type='submit' className='ui button'>
            Login
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { token: state.auth.token };
};

// const myOwnConnect = connect(mapStateToProps, { logIn })(Auth);

export default connect(mapStateToProps, { logIn, logOut })(Auth);
