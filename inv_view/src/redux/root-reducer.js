import {combineReducers} from 'redux';
import shrinkData from './shrinkpage/shrinkpage.reducer';
import countData from './countdetailpage/countdetailpage.reducer';
import modalState from './modal/modal.reducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from "redux-persist";

const persistConfig = {
    key: 'root', 
    storage
};

const rootReducer = combineReducers({
    shrinkData,
    countData,
    modalState
});


export default persistReducer(persistConfig, rootReducer);