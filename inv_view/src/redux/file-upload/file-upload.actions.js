import FileUploadActionTypes from './file-upload.types';

export const CHG_fileUploadStart = (file) => ({
    type: FileUploadActionTypes.CHG_FILE_UPLOAD_START,
    payload: file
});

export const CHG_fileUploadSuccess = (file) => ({
    type:FileUploadActionTypes.CHG_FILE_UPLOAD_SUCCESS,
    payload: file,
});

export const CHG_fileUploadFailure = (error) => ({
    type: FileUploadActionTypes.CHG_FILE_UPLOAD_FAILURE,
    payload: error,
})

export const FSC_fileUploadStart = (file) => ({
    type: FileUploadActionTypes.FSC_FILE_UPLOAD_START,
    payload: file
});

export const FSC_fileUploadSuccess = (file) => ({
    type:FileUploadActionTypes.FSC_FILE_UPLOAD_SUCCESS,
    payload: file,
});

export const FSC_fileUploadFailure = (error) => ({
    type: FileUploadActionTypes.FSC_FILE_UPLOAD_FAILURE,
    payload: error,
})