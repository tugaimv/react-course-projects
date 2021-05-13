import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID QT8_mh6PUWgg7ZK8uQGgPdHCZ03H5-doWkEWlNfIutA'
  }
});