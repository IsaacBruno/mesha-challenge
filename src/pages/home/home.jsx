import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <h3>Weather Song App</h3>
      <h5>Curta suas músicas de acordo com o clima de sua cidade</h5>
      <Link to="/playlists">Acessar playlists curtidas</Link>
    </>
  );
}

export default Home;
