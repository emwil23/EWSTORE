import React from 'react';
import { connect } from 'react-redux';
import { logIn } from '../../actions';
import axios from 'axios';

class Auth extends React.Component {
  // state = { token: '' };
  componentDidMount() {
    this.props.logIn('');
    // console.log('On Mount ' + this.props.token);
  }

  componentDidUpdate() {
    // this.nextPage(this.state.token);
    // this.props.logIn('');
    // console.log('On Update ' + this.props.token)
  }

  getToken = () => {
    axios
      .post('https://fakestoreapi.com/auth/login', {
        username: 'mor_2314',
        password: '83r5^_',
      })
      .then((res) => {
        this.props.logIn(res.data.token);
        // this.setState({ token: res.data.token });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div
        className='ui raised very padded text container segment'
        style={{ marginTop: '20px' }}
      >
        //Temp signIn
        <br></br>
        <button
          className='ui button secondary'
          onClick={() => {
            this.getToken();
          }}
        >
          SIGN IN
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { token: state.auth.token };
};

export default connect(mapStateToProps, { logIn })(Auth);
