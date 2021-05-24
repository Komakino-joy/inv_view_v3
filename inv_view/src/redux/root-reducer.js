import {combineReducers} from 'redux';
import shrinkData from './shrinkpage/shrinkpage.reducer';
import countData from './countdetailpage/countdetailpage.reducer';
import modalState from './modal/modal.reducer';
import progressData from './progress.page/progress.page.reducers';
import fileUploadReducer from './file-upload/file-upload.reducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from "redux-persist";

const persistConfig = {
    key: 'root', 
    storage
};

const rootReducer = combineReducers({
    shrinkData,
    countData,
    modalState,
    progressData,
    fileUploadReducer,
});


export default persistReducer(persistConfig, rootReducer);