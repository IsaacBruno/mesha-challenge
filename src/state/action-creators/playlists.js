import * as types from '../action-types';

export const savePlaylist = (playlist) => ({
  type: types.SAVE_PLAYLIST,
  payload: playlist
});

export const removePlaylist = (index) => ({
  type: types.DELETE_PLAYLIST,
  payload: index
});
