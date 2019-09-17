import { takeEvery } from "redux-saga/effects";

import * as ActionTypes from "../actions/actionTypes";
import { logoutSaga } from "./auth";

export function* watchAuth() {
  yield takeEvery(ActionTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
}
