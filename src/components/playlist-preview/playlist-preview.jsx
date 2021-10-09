import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { removePlaylist } from '../../state/action-creators';
import PropTypes from 'prop-types';
import PlaylistItem from '../playlist-item/playlist-item';

function PlaylistPreview(props) {
  const dispatch = useDispatch();
  const added_at = new Date(props.added_at);

  return (
    <div className="card" style={{ marginBottom: 10 }}>
      <div className="card-header d-flex justify-content-between">
        <strong>Temperatura: {props.temperature}°C</strong>
        <button
          type="button"
          className="btn btn-danger"
          title="Excluir playlist"
          onClick={() => {
            dispatch(removePlaylist(props.index));
            toast.success('Removida de suas playlists favoritas');
          }}
        >
          <span className="material-icons">delete</span>
        </button>
      </div>
      <div className="card-body">
        <div className="collection-info">
          <h4>
            Adicionado em: {`${added_at.getDate()}/${added_at.getMonth()+1}/${added_at.getFullYear()}`} |
            Cidade: {props.city} |
            Categoria das músicas: {props.song_category}
          </h4>
        </div>
        <PlaylistItem playlist={props.playlist} />
      </div>
    </div>
  );
}

PlaylistPreview.propTypes = {
  added_at: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date)
  ]).isRequired,
  temperature: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  song_category: PropTypes.string.isRequired,
  playlist: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired
};

export default PlaylistPreview;
