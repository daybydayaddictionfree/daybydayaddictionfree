import React from 'react';
import { Redirect } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import GoogleId from '../../../keysAndIds/GoogleId.js';

const responseGoogle = (response) => {
  console.log(response);
  console.log('in response function');

  return (
    <div>
      <h1>Redirect Invoked</h1>
      <Redirect to={{
          pathname: '/user',
        }}
      />
    </div>
  );
};

class Login extends React.Component {

  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <GoogleLogin
        clientId={GoogleId.client_id}
        buttonText="Login using Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    )
  }
}

export default Login;
