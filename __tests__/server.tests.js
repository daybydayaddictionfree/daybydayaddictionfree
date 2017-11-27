import 'jest';
import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'raf/polyfill';
import messages from './../sampleData';
import axios from 'axios';

describe('DBD application server ', () => {
  test('should return false for user verifying auth with invalid cookie', async () => {
    const response = await axios.get('/verifyauth');
    console.log('RESPONSE ', response);
  });
});

// it('should return false for user verifying auth with invalid cookie', () => {
//   console.log('In test');
//   return axios.get('/sendcheckins')
//   .then((res) => {
//     console.log('res is ', res);
//     expect(res.body).toBe(true);
//   })
//   .catch((err) => {
//     console.log('err is ', err);
//     expect(err).toBe(false);
//   });
// });
