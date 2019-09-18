import { takeEvery } from "redux-saga/effects";

import * as ActionTypes from "../actions/actionTypes";
import { logoutSaga, checkAuthTimeoutSaga } from "./auth";

export function* watchAuth() {
  yield takeEvery(ActionTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
  yield takeEvery(ActionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
}
