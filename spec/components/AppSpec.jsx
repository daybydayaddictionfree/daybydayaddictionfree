import React from 'react';
import {
  Simulate,
  renderIntoDocument,
  findRenderedDOMComponentWithClass,
  scryRenderedDOMComponentsWithClass
} from 'react-dom/test-utils';

describe('App', () => {

  let app;

  beforeEach(() => {
    app = renderIntoDocument(<App />);
  });

  it('should be a stateful class component', () => {
    expect(React.Component.isPrototypeOf(App)).to.be.true;
  })
});
