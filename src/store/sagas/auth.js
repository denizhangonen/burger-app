import { put } from "redux-saga/effects";
import { delay } from "redux-saga/effects";

import * as actions from "../actions";

export function* logoutSaga(action) {
  // Clear local storage
  yield localStorage.removeItem("token");
  yield localStorage.removeItem("expirationDate");
  yield localStorage.removeItem("userId");
  // Dispatch success action
  yield put(actions.logoutSucced());
}

export function* checkAuthTimeoutSaga(action) {
  yield delay(action.expirationTime);
  yield put(actions.logout());
}
