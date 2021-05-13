import axios from 'axios';

const KEY = 'AIzaSyDkv8tVnJksEXSb4Q0tzK119NP72RLggBc';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});