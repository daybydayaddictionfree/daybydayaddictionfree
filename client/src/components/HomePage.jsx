import React from 'react';
import MessageList from './MessageList.jsx'
// import messages from '../../../sampleData';
import ProgressBar from './ProgressBar.jsx';
import { GoogleLogout } from 'react-google-login';

const logout = () => {
  console.log('Logging user out');
};

const HomePage = props => (
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

export default HomePage;
