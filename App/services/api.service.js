import axios from 'axios';

export default axios.create({
  baseURL: 'http://10.81.169.10:4000'
  //baseURL: 'http://192.168.1.106:4000'
});
