import React from 'react';
import { connect } from 'react-redux';
import { logIn, logOut, removeError } from '../../actions';

class Auth extends React.Component {
  componentDidMount() {
    this.props.logOut();
    this.props.removeError();
    // console.log('On Mount ' + this.props.token);
  }

  componentDidUpdate() {
    // console.log('On Update ' + this.props.token);
  }

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

export default connect(mapStateToProps, { logIn, logOut, removeError })(Auth);
