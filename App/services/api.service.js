import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:4000' // Preencher o localhost com o Ip
});
