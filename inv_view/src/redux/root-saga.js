import { all, call } from 'redux-saga/effects';
import { shrinkSagas } from './shrinkpage/shrinkpage.sagas'
import { countSagas } from './countdetailpage/countdetailpage.sagas'


export default function* rootSaga() {
    yield all(
        [
            call(shrinkSagas),
            call(countSagas)
        ]
    );
}