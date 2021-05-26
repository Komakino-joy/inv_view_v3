import FileUploadActionTypes from './file-upload.types';

const INITIAL_STATE = {
    status: null,
    error: null,
    loading: false,
};

const fileUploadReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
    case FileUploadActionTypes.FILE_UPLOAD_START:
        return {
            ...state,
            loading: true,
        }
    case FileUploadActionTypes.FILE_UPLOAD_SUCCESS:
        return {
            ...state,
            status: 'Success',
            loading: false,
            error:null,
        }
    case FileUploadActionTypes.FILE_UPLOAD_FAILURE:
        return {
            ...state,
            status: 'Failure',
            loading: false,
            error:action.payload,
        }
    
    default: 
        return state

    };
};

export default fileUploadReducer;