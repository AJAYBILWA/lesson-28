import { call, all } from 'redux-saga/effects'

import { fetchCollectionsStart, shopSagas } from './shop/shop.sagas'
import { userSagas } from './user/user.sagas'
import { cartSagas } from './cart/cart.sagas'

export default function* rootSaga() {
    yield all([
        call(fetchCollectionsStart),
        call(userSagas),
        call(cartSagas),
        call(shopSagas)
    ])
}