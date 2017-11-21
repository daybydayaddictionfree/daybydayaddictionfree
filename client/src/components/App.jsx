import React from 'react';
import axios from 'axios';
import { Link, Route, Redirect, Switch } from 'react-router-dom';
import Cookies from 'universal-cookie';
import HomePage from './HomePage.jsx';
import Login from './Login.jsx';
import messages from '../../../sampleData';

const cookies = new Cookies();

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
    this.checkCookies = this.checkCookies.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    this.checkCookies();
  }

  checkCookies() {
    if (cookies.get('dbd-session-cookie')) {
      axios.get('/login')
        .then((response) => {
          console.log(response);
          this.setState({
            loggedIn: true,
          });
        });
    }
  }

  logout() {
    this.setState({
      loggedIn: false
    });
  }

  responseGoogle(response) {
    console.log(response);
    console.log('in response function');
    cookies.set('dbd-session-cookie', response.tokenId);

    // Need to add axios.get request here to ('/login')

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
      <HomePage messages={messages} userState={this.state} cookies={cookies} logout={this.logout} />
    )
  }

  render() {
    if (!this.state.loggedIn) {
      return (
        <div>
          <nav>
            <Link to="/landing" style={{ margin: '5px' }} >LandingPage</Link>
            <Link to="/signup" style={{ margin: '5px' }} >SigupPage</Link>
            <Login responseGoogle={this.responseGoogle} />
          </nav>
          <div>
            <Switch>
              <Route exact path="/landing" component={LandingPage} />
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
          <Redirect to="/home" />
        </Switch>
      </div>
    )
  }
}

const LandingPage = () => <h1>Future Landing Page</h1>;
const SignupPage = () => <h1>Future Signup Page</h1>;

export default App;
