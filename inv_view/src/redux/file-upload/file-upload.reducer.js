import FileUploadActionTypes from './file-upload.types';

const INITIAL_STATE = {
    status: null,
    error: null,
};

const fileUploadReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
    case FileUploadActionTypes.FILE_UPLOAD_SUCCESS:
        return {
            ...state,
            status: 'Success',
            error:null,
        }
    case FileUploadActionTypes.FILE_UPLOAD_FAILURE:
        return {
            ...state,
            status: 'Failure',
            error:action.payload,
        }
    
    default: 
        return state

    };
};

export default fileUploadReducer;