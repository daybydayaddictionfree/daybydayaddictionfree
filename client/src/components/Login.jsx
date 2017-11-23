import React from 'react';
import GoogleLogin from 'react-google-login';


const Login = props => (
  <GoogleLogin
    clientId={process.env.GOOGLE_ID}
    buttonText="Login using Google"
    onSuccess={props.responseGoogle}
    onFailure={() => {
      console.log('FAILURE__________________');
    }}
  />
);

export default Login;

