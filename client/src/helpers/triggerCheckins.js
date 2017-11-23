import axios from 'axios';

const triggerCheckins = () => {
  axios.get('/sendcheckins')
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

export default triggerCheckins;
