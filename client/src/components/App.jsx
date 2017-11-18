import React from 'react';
import { Route } from 'react-router-dom';
import UserPage from './UserPage.jsx';

const App = () => (
  <div>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/signup" component={SignupPage} />
    <Route exact path="/user" component={UserPage} />
  </div>
);

const LandingPage = () => <h1>Future Landing Page</h1>;
const SignupPage = () => <h1>Future Signup Page</h1>;

export default App;
