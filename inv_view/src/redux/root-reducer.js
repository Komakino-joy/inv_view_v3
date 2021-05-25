import {combineReducers} from 'redux';

import { 
    CHG_shrinkData,
    FSC_shrinkData 
} from './shrinkpage/shrinkpage.reducer';

import {
    CHG_countData,
    FSC_countData
} from './countdetailpage/countdetailpage.reducers';
import modalState from './modal/modal.reducer';
import { CHG_progressData } from './progress.page/progress.page.reducers';
import fileUploadReducer from './file-upload/file-upload.reducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from "redux-persist";

const persistConfig = {
    key: 'root', 
    storage
};

const rootReducer = combineReducers({
    CHG_shrinkData,
    FSC_shrinkData,
    CHG_countData,
    FSC_countData,
    modalState,
    CHG_progressData,
    // FSC_progressData,
    fileUploadReducer,
});


export default persistReducer(persistConfig, rootReducer);