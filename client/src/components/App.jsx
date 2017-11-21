import React from 'react';
import { Link, Route, Redirect, Switch } from 'react-router-dom';
import HomePage from './HomePage.jsx';
import Login from './Login.jsx';
import messages from '../../../sampleData';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      profileObj: {},
      tokenId: '',
    };
    this.responseGoogle = this.responseGoogle.bind(this);
    this.logState = this.logState.bind(this);
    this.homePage = this.homePage.bind(this);
  }

  responseGoogle(response) {
    console.log(response);
    console.log('in response function');

    this.setState({
      loggedIn: true,
      profileObj: response.profileObj,
      tokenId: response.tokenId,
    });
  }

  logState() {
    console.log('Here is state');
    console.log(this.state);
  }

  homePage() {
    return (
      <HomePage messages={messages} userState={this.state} />
    )
  }

  render() {
    if (!this.state.loggedIn) {
      return (
        <div>
          <nav>
            <Link to="/" style={{ margin: '5px' }} >LandingPage</Link>
            <Link to="/signup" style={{ margin: '5px' }} >SigupPage</Link>
            <Login responseGoogle={this.responseGoogle} />
          </nav>
          <div>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/signup" component={SignupPage} />
            </Switch>
          </div>
        </div>
      );
    }
    return (
      <div>
        <button onClick={this.logState} >Click to console log user credentials</button>
        <Switch>
          <Route exact path="/home" render={this.homePage} />
          <Redirect to='/home' />
        </Switch>
      </div>
    )
  }
}

const LandingPage = () => <h1>Future Landing Page</h1>;
const SignupPage = () => <h1>Future Signup Page</h1>;

export default App;
