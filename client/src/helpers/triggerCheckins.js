import axios from 'axios';

const triggerCheckins = () => {
  axios.get('/sendcheckins');
};

export default triggerCheckins;
