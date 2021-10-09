import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import debounce from 'lodash.debounce';
import { toast } from 'react-toastify';

import WeatherService from '../../services/weather.service';
import ShazamService from '../../services/shazam.service';

function Home() {
  const [search, setSearch] = useState('');
  const [playlist, setPlaylist] = useState([]);
  const [temperature, setTemperature] = useState(0);
  const [songCategory, setSongCategory] = useState('');
  const [loading, setLoading] = useState(false);

  const tempFilter = query => {
    if (!query) return setPlaylist([]);
    fetchWeather(query);
  };

  const fetchWeather = useCallback(debounce(async (query) => {
    setLoading(true);
    try {
      const response = await WeatherService.get(query);
      const { temp } = response.data.main;
      setTemperature(temp);
      let songCat = '';
      if (temp < 16) {
        songCat = 'lofi';
      } else if (temp < 24) {
        songCat = 'classical';
      } else if (temp < 32) {
        songCat = 'pop';
      } else {
        songCat = 'rock';
      }
      setSongCategory(songCat);
      fetchSongs(songCat);
    } catch (e) {
      toast.error('Erro inesperado! Por favor, tente novamente');
    }
  }, 500), []);

  const fetchSongs = useCallback(async (query) => {
    try {
      const response = await ShazamService.get(query);
      const { tracks } = response.data;
      setLoading(false);
      setPlaylist(tracks.hits.map((hit) => ({
        key: hit.track.key,
        song: hit.track.title,
        artist: hit.track.subtitle
      })));
    } catch (e) {}
  }, []);

  return (
    <>
      <h3>Weather Song App</h3>
      <h5>Curta suas músicas de acordo com o clima de sua cidade</h5>
      <Link to="/playlists">Acessar playlists curtidas</Link>
      <input
        className="form-control"
        style={{ maxWidth: 200, margin: '0 auto' }}
        type="search"
        placeholder="Nome da cidade"
        onChange={(e) => {
          setSearch(e.target.value);
          tempFilter(e.target.value);
        }}
      />
    </>
  );
}

export default Home;
