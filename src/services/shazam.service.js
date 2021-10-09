import api from '../api/shazam';

class ShazamService {
  get (query) {
    return api.get('/search', {
      params: {
        term: query
      }
    });
  }
}

export default new ShazamService();
