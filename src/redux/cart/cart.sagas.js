import { all, call, put, takeLatest } from 'redux-saga/effects'
import CartActionTypes from './cart.types'
import UserActionTypes from '../user/user.types'
import { clearCart } from './cart.actions'

export function* clearCartOnSignOut() {
    yield put(clearCart())
}

export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

export function* cartSagas() {
    yield all([
        call(onSignOutSuccess)
    ])
}