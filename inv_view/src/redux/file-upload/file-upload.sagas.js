import { all, call, put, takeLatest } from 'redux-saga/effects';

import FileUploadActionTypes from './file-upload.types';

import {
    CHG_API_URL, 
    FSC_API_URL,
    httpFileUpload
} from '../../api/api';

import {
    CHG_fileUploadSuccess,
    CHG_fileUploadFailure,
    FSC_fileUploadSuccess,
    FSC_fileUploadFailure
} from './file-upload.actions.js'


function* CHG_fileUpload({payload: {file, apiRoute}}){
    try {
        yield httpFileUpload(`${CHG_API_URL}`,apiRoute , file )
        yield put(CHG_fileUploadSuccess())
    } catch (error) {
        yield put(CHG_fileUploadFailure(error))
    };
};

function* FSC_fileUpload({payload: {file, apiRoute}}){
    try {
        yield httpFileUpload(`${FSC_API_URL}`,apiRoute , file )
        yield put(FSC_fileUploadSuccess())
    } catch (error) {
        yield put(FSC_fileUploadFailure(error))
    };
};

export function* CHG_fileUploadSaga(){
    yield takeLatest(FileUploadActionTypes.CHG_FILE_UPLOAD_START, CHG_fileUpload,)
};

export function* FSC_fileUploadSaga(){
    yield takeLatest(FileUploadActionTypes.FSC_FILE_UPLOAD_START, FSC_fileUpload,)
};

export function* fileUploadSagas(){
    yield all([
        call(CHG_fileUploadSaga),
        call(FSC_fileUploadSaga)
    ])
}