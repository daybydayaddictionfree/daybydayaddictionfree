import 'jest';
import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'raf/polyfill';
import messages from './../sampleData';
import axios from 'axios';

describe('DBD application server ', () => {
  it('should return false for user verifying auth with invalid cookie', () => {
    axios.get('/verifyAuth')
      .then((res) => {
        console.log('CONSOLE LOG ', res.body);
        // expect(res).toBe(true);
      })
      .catch((err) => {
        expect(err).toBe(false);
      });
  });
});
