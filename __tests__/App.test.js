import 'jest';
import App from '../client/src/components/App.jsx';
import HomePage from '../client/src/components/HomePage.jsx';
import MessageList from '../client/src/components/MessageList.jsx';
import Message from '../client/src/components/Message.jsx';
import ProgressBar from '../client/src/components/ProgressBar.jsx';
import Login from '../client/src/components/Login.jsx';
import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'raf/polyfill';
import messages from './../sampleData';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('should be a stateful class component ', () => {
    const wrapper = shallow( <App /> );
    expect(React.Component.isPrototypeOf(App)).toBe(true);
  });

  it('should render the App component ', () => {
    const wrapper = shallow( <App /> );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<HomePage />', () => {
  it('should be a stateless component ', () => {
    expect(React.Component.isPrototypeOf(HomePage)).toBe(false);
  });

  it('should render the HomePage component ', () => {
    const userState = {
      profileObj: {
        givenName: 'Brian',
        familyName: 'Choe',
      }
    };
    const wrapper = shallow( <HomePage userState={userState} /> );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<MessageList />', () => {
  it('should be a stateless component ', () => {
    expect(React.Component.isPrototypeOf(MessageList)).toBe(false);
  });

  it('should render the MessageList component ', () => {
    const wrapper = shallow( <MessageList messages={messages} /> );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<Message />', () => {
  it('should be a stateless component ', () => {
    expect(React.Component.isPrototypeOf(Message)).toBe(false);
  });

  it('should render the Message component ', () => {
    const wrapper = shallow( <Message message={messages[0]} /> );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<ProgressBar />', () => {
  it('should be a stateless component ', () => {
    expect(React.Component.isPrototypeOf(ProgressBar)).toBe(false);
  });

  it('should render the ProgressBar component ', () => {
    const wrapper = shallow( <ProgressBar /> );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<Login />', () => {
  it('should be a stateless component ', () => {
    expect(React.Component.isPrototypeOf(Login)).toBe(false);
  });

  it('should render the Login component ', () => {
    const wrapper = shallow( <Login /> );
    expect(wrapper).toMatchSnapshot();
  });
});
