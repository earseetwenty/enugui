import * as types from './types';
import enu from './helpers/enu';

export function downloadProgress(progress) {
  return (dispatch: () => void) => {
    dispatch({
      type: types.APP_UPDATE_DOWNLOAD_PROGRESS,
      payload: progress
    });
  };
}

export function getConstants() {
  return (dispatch: () => void, getState) => {
    dispatch({
      type: types.SYSTEM_GETCONSTANTS_PENDING
    });
    const { connection } = getState();
    // Don't retrieve if we're not on mainnet
    if (connection.chainKey !== 'enu-mainnet') {
      return dispatch({
        type: types.SYSTEM_GETCONSTANTS_FAILURE
      });
    }

    const query = {
      json: true,
      code: 'anchorwallet',
      scope: 'anchorwallet',
      table: 'constants',
      limit: 1000,
    };
    enu(connection).getTableRows(query).then((results) => {
      const { rows } = results;
      const data = rows.reduce((map, { key, value }) => {
        let parsed = value;
        try {
          parsed = JSON.parse(value);
        } catch (e) {
          // no catch
        }
        return {
          ...map,
          [key]: parsed
        };
      }, {});
      return dispatch({
        type: types.SYSTEM_GETCONSTANTS_SUCCESS,
        payload: { data }
      });
    }).catch((err) => dispatch({
      type: types.SYSTEM_GETCONSTANTS_FAILURE,
      payload: { err },
    }));
  };
}

export default {
  downloadProgress
};
