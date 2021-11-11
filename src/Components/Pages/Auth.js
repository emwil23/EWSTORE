import React from 'react';

function Auth() {
  return (
    <div
      className='ui raised very padded text container segment'
      style={{ marginTop: '20px' }}
    >
      <div className='ui form'>
        <div className='field'>
          <label>username:</label>
          <input type='text' name='username' placeholder='username' />
        </div>
        <div className='field'>
          <label>password:</label>
          <input type='text' name='password' placeholder='password' />
        </div>
        <button className='ui button' type='submit'>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Auth;
