import React from 'react';
import Login from './Login';

const LandingPage = props => (
  <div>
    <div className="landing-section">
      <h1>Solve Addiction with Connection</h1>
      <h3>Stop smoking now. You just need three friends and a desire to quit smoking.</h3>
      <div style={{ margin: '10px' }}>
        <Login buttonText="Sign Up Using Google" responseGoogle={props.responseGoogle} />
      </div>
    </div>
  </div>
);

export default LandingPage;
