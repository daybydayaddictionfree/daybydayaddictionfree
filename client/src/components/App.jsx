import React from 'react';
import { Link, Route } from 'react-router-dom';
import UserPage from './UserPage.jsx';
import Login from './Login.jsx';

const App = () => (
  <div>
    <nav>
      <Link to="/" style={{ margin: '5px' }} >LandingPage</Link>
      <Link to="/signup" style={{ margin: '5px' }} >SigupPage</Link>
      <Link to="/user" style={{ margin: '5px' }} >UserPage</Link>
      <Login />
    </nav>
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/signup" component={SignupPage} />
      <Route exact path="/user" component={UserPage} />
    </div>
  </div>
);

const LandingPage = () => <h1>Future Landing Page</h1>;
const SignupPage = () => <h1>Future Signup Page</h1>;

export default App;
