import React from 'react';
import GoogleLogin from 'react-google-login';
import GoogleId from '../../../keysAndIds/GoogleId';


const Login = props => (
  <GoogleLogin
    clientId={GoogleId}
    buttonText="Login using Google"
    onSuccess={props.responseGoogle}
    onFailure={() => {
      console.log('FAILURE__________________');
    }}
  />
);

export default Login;

