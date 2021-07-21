import { createAction, handleActions } from "redux-actions";
import {
  call,
  delay,
  put,
  takeEvery,
  takeLatest,
  take,
} from "redux-saga/effects";

const SAVE_BEERLIST = "saveList/SAVE_BEERLIST";
const SAVE_BEERLIST_FAIL = "saveList/SAVE_BEERLIST__FAIL";
const SAVE_BEERLIST_SUCCESS = "saveList/SAVE_BEERLIST_SUCCESS";

export const saveBeerlist = createAction(SAVE_BEERLIST);

function* save_beerlist(columContents) {
  try {
    yield put({
      type: SAVE_BEERLIST_SUCCESS,
      payload: columContents,
    });
  } catch (error) {
    yield put({
      type: SAVE_BEERLIST_FAIL,
      payload: error,
      error: true,
    });
  }
}


export function* saveListSaga() {
  yield takeEvery(SAVE_BEERLIST, save_beerlist);

}

const initialState = {
  list: null,
};

const saveList = handleActions(
  {
    [SAVE_BEERLIST_SUCCESS]: (state, action) => ({
      ...state,
      list: action.payload,
    }),
  },
  initialState
);

export default saveList;
