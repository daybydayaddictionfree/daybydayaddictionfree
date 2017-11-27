import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'raf/polyfill';
import messages from './../sampleData';
import axios from 'axios';
import request from 'request';

configure({ adapter: new Adapter() });

describe('DBD application server ', () => {
  it('should return false for user verifying auth with invalid cookie', () => {
    return axios.get('http://localhost:8080/verifyAuth')
      .then((data) => {
        expect(data.data).toBe(false);
      });
  });

  it('should return false for unauthenticated user attempting to login', () => {
    const successFirstLine = '<!DOCTYPE html>';
    return axios.get('http://localhost:8080/login')
      .then((data) => {
        expect(data.data.split('\n')[0]).toBe(successFirstLine);
      });
  });

  it('should return login template for unauthenticated user attempting to login', () => {
    const successFirstLine = '<!DOCTYPE html>';
    return axios.get('http://localhost:8080/login')
      .then((data) => {
        expect(data.data.split('\n')[0]).toBe(successFirstLine);
      });
  });

  it('should return REMOVED COOKIE attempting to logout', () => {
    return axios.get('http://localhost:8080/logout')
      .then((data) => {
        expect(data.data).toBe('REMOVED COOKIE FROM DATABASE');
      });
  });

  it('should return null for empty POST request to /SMS', () => {
    return axios.post('http://localhost:8080/sms')
      .then((data) => {
        expect(data.data).toBe('');
      });
  });
});
