import FileUploadActionTypes from './file-upload.types';

const INITIAL_STATE = {
    status: null,
    error: null,
};

export const CHG_fileUploadReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
    case FileUploadActionTypes.CHG_FILE_UPLOAD_START:
        return {
            ...state,
            loading: true,
        }
    case FileUploadActionTypes.CHG_FILE_UPLOAD_SUCCESS:
        return {
            ...state,
            status: 'Success',
            error:null,
        }
    case FileUploadActionTypes.CHG_FILE_UPLOAD_FAILURE:
        return {
            ...state,
            status: 'Failure',
            error:action.payload,
        }
    
    default: 
        return state

    };
};

export const FSC_fileUploadReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
    case FileUploadActionTypes.FSC_FILE_UPLOAD_START:
        return {
            ...state,
            loading: true,
        }
    case FileUploadActionTypes.FSC_FILE_UPLOAD_SUCCESS:
        return {
            ...state,
            status: 'Success',
            error:null,
        }
    case FileUploadActionTypes.FSC_FILE_UPLOAD_FAILURE:
        return {
            ...state,
            status: 'Failure',
            error:action.payload,
        }
    
    default: 
        return state

    };
};



