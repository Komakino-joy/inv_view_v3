import FileUploadActionTypes from './file-upload.types';

export const fileUploadStart = (file) => ({
    type: FileUploadActionTypes.FILE_UPLOAD_START,
    payload: file
});

export const fileUploadSuccess = (file) => ({
    type:FileUploadActionTypes.FILE_UPLOAD_SUCCESS,
    payload: file,
});

export const fileUploadFailure = (error) => ({
    type: fileUploadFailure,
    payload: error,
})