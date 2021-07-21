import { combineReducers } from "redux";
import { all, call, put, take, takeEvery, takeLatest } from "redux-saga/effects";

import saveList, {saveListSaga} from './redux/saveList'
//watcher saga -> actions -> worker saga
import { enableES5 } from "immer";

enableES5();

const rootReducer = combineReducers({
  saveList
});

// export default rootReducer;
export default rootReducer;
//wathcer saga
export function* rootSaga() {
  yield all([saveListSaga()])
}
