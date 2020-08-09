import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID ityjWHew-H7WNH6HNo-vE0lcf7y2HANgU__Io4fqx4E'
  }
})