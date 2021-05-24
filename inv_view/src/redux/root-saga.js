import { all, call } from 'redux-saga/effects';
import { shrinkSagas } from './shrinkpage/shrinkpage.sagas';
import { countSagas } from './countdetailpage/countdetailpage.sagas';
import { progressPageSagas } from './progress.page/progress.page.sagas';
import { fileUploadSagas } from './file-upload/file-upload.sagas'


export default function* rootSaga() {
    yield all(
        [
            call(shrinkSagas),
            call(countSagas),
            call(progressPageSagas),
            call(fileUploadSagas),
        ]
    );
}