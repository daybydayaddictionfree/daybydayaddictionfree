import axios from 'axios';

const triggerCheckins = () => {
  console.log('Sending checkin messages');
  axios.get('/sendcheckins');
};

export default triggerCheckins;
