import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import PlaylistPreview from '../../components/playlist-preview/playlist-preview';

function Playlists() {
  const playlists = useSelector(state => state.playlists.playlists);

  return (
    <>
      <h3>Listas de músicas favoritas</h3>
      <Link to="/">Voltar para a página inicial</Link>
      {playlists.length ? (
        <>
          {playlists.map((playlist, index) => (
            <PlaylistPreview key={index} index={index} {...playlist} />
          ))}
        </>
      ) : (
        <h4>Não há listas favoritadas</h4>
      )}
    </>
  );
}

export default Playlists;
