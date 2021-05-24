import { all, call, put, takeLatest } from 'redux-saga/effects';

import FileUploadActionTypes from './file-upload.types';

import {
    CHG_API_URL, 
    httpFileUpload
} from '../../api/api';

import {
    fileUploadSuccess,
    fileUploadFailure,
} from './file-upload.actions.js'


function* CHG_fileUpload({payload: {file, apiRoute}}){
    try {
        yield httpFileUpload(`${CHG_API_URL}`,apiRoute , file )
        yield put(fileUploadSuccess())
    } catch (error) {
        yield put(fileUploadFailure(error))
    };
};

export function* CHG_fileUploadSaga(){
    yield takeLatest(FileUploadActionTypes.FILE_UPLOAD_START, CHG_fileUpload,)
};

export function* fileUploadSagas(){
    yield all([
        call(CHG_fileUploadSaga)
    ])
}