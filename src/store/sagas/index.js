import { takeEvery } from "redux-saga/effects";

import * as ActionTypes from "../actions/actionTypes";
import {
  logoutSaga,
  checkAuthTimeoutSaga,
  authUserSaga,
  authCheckStateSaga
} from "./auth";

import { initIngredientsSaga } from "./burgerBuilder";

export function* watchAuth() {
  yield takeEvery(ActionTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
  yield takeEvery(ActionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
  yield takeEvery(ActionTypes.AUTH_USER, authUserSaga);
  yield takeEvery(ActionTypes.AUTH_CHECK_STATE, authCheckStateSaga);
}

export function* watchBurgerBuilder() {
  yield takeEvery(ActionTypes.INIT_INGREDIENTS, initIngredientsSaga);
}
