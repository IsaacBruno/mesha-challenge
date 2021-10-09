import React from 'react';
import { Link } from 'react-router-dom';

function Playlists() {
  return (
    <>
      <h3>Listas de músicas favoritas</h3>
      <Link to="/">Voltar para a página inicial</Link>
    </>
  );
}

export default Playlists;
