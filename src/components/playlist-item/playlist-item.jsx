import React from 'react';

function PlaylistItem(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Música</th>
          <th>Artista</th>
        </tr>
      </thead>
      <tbody>
        {props.playlist.map(({ key, song, artist }) => (
          <tr key={key}>
            <td>{song}</td>
            <td>{artist}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PlaylistItem;
