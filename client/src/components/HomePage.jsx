import React from 'react';
import axios from 'axios';
import MessageList from './MessageList.jsx'
import ProgressBar from './ProgressBar.jsx';
import { GoogleLogout } from 'react-google-login';

const HomePage = (props) => {
  const logout = () => {
    axios.get('/logout')
      .then(() => {
        console.log('PROPS.COOKIES', props.cookies);
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
      <h1 style={{ textAlign: 'center' }} >{props.userState.profileObj.name} </h1>
      <ProgressBar progress={props.userState.progress} />
      <MessageList messages={props.userState.messages} />
    </div>
  );
}

export default HomePage;
