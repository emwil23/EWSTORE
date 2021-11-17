import React from 'react';
import { connect } from 'react-redux';
import { logIn, logOut, getUserInfo, getCartDetails } from '../../actions';
import { Link } from 'react-router-dom';

//SVGs and IMages
import { ReactComponent as IconAvatar } from '../../assets/avatar.svg';
import { ReactComponent as IconInfo } from '../../assets/user-info.svg';
import { ReactComponent as IconCart } from '../../assets/user-cart.svg';
import IconAbout from '../../assets/user-about.jpg';

class Auth extends React.Component {
  componentDidMount() {
    // this.props.logOut();
    // console.log('On Mount ' + this.props.token);
  }

  componentDidUpdate() {
    // console.log('On Update ' + this.props.token);
  }

  addCart = (id) => {
    this.props.getCartDetails(id);
  };

  getName = () => {
    return this.props.userDetail.name.firstname;
    // ' ' +
    // this.props.userDetail.name.lastname
  };

  //getUSER details
  getUser = (id) => {
    this.props.getUserInfo(id);
  };

  //For Async Action
  onSubmit = (name, pass) => {
    const values = {
      username: name,
      password: pass,
    };

    this.props.logIn(values);
  };

  render() {
    return this.props.token === '' ? (
      //RUN THIS WHEN USER IS NOT LOGGED IN
      <div className='container__float'>
        <div className='user__container'>
          <div className='login-display-1'>
            <button className='login-btn'>Login</button>
          </div>
          <div className='login-options-1'>
            <div className='login-option--'>
              <button
                className='option-btn-1'
                onClick={() => {
                  this.onSubmit('donero', 'ewedon');
                  this.getUser(4);
                }}
              >
                donero
              </button>
            </div>
            <div className='login-option--'>
              <button
                className='option-btn-1'
                onClick={() => {
                  this.onSubmit('johnd', 'm38rmF$');
                  this.getUser(1);
                }}
              >
                johnd
              </button>
            </div>
            <div className='login-option--'>
              <button
                className='option-btn-1'
                onClick={() => {
                  this.onSubmit('derek', 'jklg*_56');
                  this.getUser(5);
                }}
              >
                derek
              </button>
            </div>
          </div>
        </div>
      </div>
    ) : (
      //RUN THE LOGIC WHEN USER IS LOGGED IN
      <div className='container__float'>
        <div className='user__container'>
          <div className='login-display'>
            <div className='login-image'>
              <IconAvatar />
            </div>
            <div className='login-name'>{this.getName()}</div>
          </div>
          <div className='login-options'>
            <div className='login-option--1'>
              <Link to={'/info'}>
                <button className='option-btn'>
                  Account Info
                  <IconInfo className='option-icon' />
                </button>
              </Link>
            </div>
            <div className='login-option--2'>
              <Link to={'/cart'}>
                <button
                  className='option-btn'
                  onClick={() => {
                    this.addCart(this.props.userDetail.id);
                  }}
                >
                  Cart
                  <IconCart className='option-icon' />
                </button>
              </Link>
            </div>
            <div className='login-option--3'>
              <Link to={'/about'}>
                <button className='option-btn'>
                  About
                  <img
                    className='option-icon'
                    src={IconAbout}
                    alt='my avatar'
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { token: state.auth.token, userDetail: state.auth.userInfo };
};

// const myOwnConnect = connect(mapStateToProps, { logIn })(Auth);

export default connect(mapStateToProps, {
  logIn,
  logOut,
  getUserInfo,
  getCartDetails,
})(Auth);
