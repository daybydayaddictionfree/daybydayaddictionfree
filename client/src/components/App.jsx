import React from 'react';
import { Link, Route } from 'react-router-dom';
import UserPage from './UserPage.jsx';

const App = () => (
  <div>
    <nav>
      <Link to="/user">UserPage</Link>
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
