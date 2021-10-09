import axios from 'axios';

export default axios.create({
  baseURL: 'https://shazam.p.rapidapi.com',
  headers: {
    'x-rapidapi-host': 'shazam.p.rapidapi.com',
    'x-rapidapi-key': '4ac139a6dbmshc0746914d2b89ddp119111jsnd5fbf2a9e80d'
  }
});
