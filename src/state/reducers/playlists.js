import * as types from '../action-types';

const initialState = {
  playlists: []
};

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case types.SAVE_PLAYLIST:
      return { playlists: [...state.playlists, action.payload] };
    case types.DELETE_PLAYLIST:
      return { playlists: [...state.playlists.filter((playlist, idx) => idx !== action.payload)] }
    default:
      return state;
  }
};

export default reducer;
