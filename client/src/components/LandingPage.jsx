import React from 'react';
import Login from './Login';

const LandingPage = props => (
  <div>
    <div className="landing-section">
      <h1>Solve Addiction with Connection</h1>
      <h3>Stop smoking now. You just need three friends and a desire to quit smoking.</h3>
      <div style={{ margin: '50px' }}>
        <Login buttonText="Sign Up Using Google" responseGoogle={props.responseGoogle} />
      </div>
      <h1 className = "space">How it works</h1>
      <div className = "flex">
        <ol>
          <li className="space">This product’s main goal is to help you quit smoking through moral support of friends and family.</li>
          <li className="space">You will provide the numbers of three close friends or family members who will be joining you on your journey to quit smoking.</li>
          <li className="space">You will be asked twice a day via SMS whether you have smoked or not. Your response will be stored and relayed to your three friends or family members.</li>
          <li className="space">The response of your family members and friends will be stored and forwarded to the you.</li>
          <li className="space">The end goal is to keep you, the smoker, from smoking for 60 days continuously. </li>
          <li className="space">Throughout the process if you decided to smoke your friends or family will be notified and your progress towards the 60 days will be set to 0.</li>
        </ol>
      </div>
    </div>
  </div>
);

export default LandingPage;


