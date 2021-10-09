import api from '../api/weather';

class WeatherService {
  get (query) {
    return api.get(`/weather?q=${query}&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}`);
  }
}

export default new WeatherService();
