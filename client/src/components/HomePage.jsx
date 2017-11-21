import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import MessageList from './MessageList.jsx'
import ProgressBar from './ProgressBar.jsx';
import { GoogleLogout } from 'react-google-login';

const HomePage = (props) => {
  const logout = () => {
    axios.get('/logout')
      .then(() => {
        props.cookies.remove('dbd-session-cookie');
      })
      .then(() => {
        props.logout();
      })
      .catch(err => console.log('Error logging out ', err));

  };

  return (
    <div>
      <GoogleLogout
        buttonText="Logout"
        onLogoutSuccess={logout}
        />
      <h1 style={{ textAlign: 'center' }} >{props.userState.profileObj.givenName} {props.userState.profileObj.familyName}</h1>
      <ProgressBar />
      <MessageList messages={props.messages} />
    </div>
  );
}

export default HomePage;
