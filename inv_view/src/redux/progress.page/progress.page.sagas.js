import {call, put, takeLatest, all} from 'redux-saga/effects';

import ProgressPageActionTypes from './progress.page.types';

import { 
    CHG_API_URL,
    FSC_API_URL,
    httpFetchOccupiedLocsCounted,
    httpFetchOccupiedLocsUncounted,
    httpFetchEmptyLocsCounted,
    httpFetchEmptyLocsUncounted,
    httpFetchTotalExpectedQty,
    httpFetchTotalVarianceQty,
    httpFetchUniqueLocsCounted,
    httpFetchTotalCountsWithVariance,
    httpFetchPR,
    httpFetchDmg,
    httpFetchNotPutawayByDay,
    httpFetchTransitionalByDay,
    httpLatestCountData,
    } from '../../api/api';

import {
    CHG_receiveOccupiedLocations,
    CHG_occupiedLocationsFailure,
    CHG_receiveOccupiedLocationsUncounted,
    CHG_occupiedLocationsUncountedFailure,
    CHG_receiveEmptyLocationsCounted,
    CHG_emptyLocationsCountedFailure,
    CHG_receiveEmptyLocationsUncounted,
    CHG_emptyLocationsUncountedFailure,
    CHG_receiveExpectedQty,
    CHG_expectedQtyFailure,
    CHG_receivevarianceQty,
    CHG_varianceQtyFailure,
    CHG_receiveUniqueLocs,
    CHG_uniqueLocsFailure,
    CHG_receiveLocsWithVarianceCount,
    CHG_locsWithVarianceCountFailure,
    CHG_receivePR,
    CHG_prFailure,
    CHG_receiveDmg,
    CHG_dmgFailure,
    CHG_receiveNotPutaway0,
    CHG_notPutaway0Failure,
    CHG_receiveNotPutaway1,
    CHG_notPutaway1Failure,
    CHG_receiveNotPutaway2,
    CHG_notPutaway2Failure,
    CHG_receiveNotPutaway3,
    CHG_notPutaway3Failure,
    CHG_receiveNotPutaway4,
    CHG_notPutaway4Failure,
    CHG_receiveNotPutaway5,
    CHG_notPutaway5Failure,
    CHG_receiveNotPutaway6,
    CHG_notPutaway6Failure,
    CHG_receiveNotPutaway7,
    CHG_notPutaway7Failure,
    CHG_receiveNotPutawayOver7,
    CHG_notPutawayOver7Failure,
    CHG_receiveTransitional0,
    CHG_transitional0Failure,
    CHG_receiveTransitional1,
    CHG_transitional1Failure,
    CHG_receiveTransitional2,
    CHG_transitional2Failure,
    CHG_receiveTransitional3,
    CHG_transitional3Failure,
    CHG_receiveTransitional4,
    CHG_transitional4Failure,
    CHG_receiveTransitional5,
    CHG_transitional5Failure,
    CHG_receiveTransitional6,
    CHG_transitional6Failure,
    CHG_receiveTransitional7,
    CHG_transitional7Failure,
    CHG_receiveTransitionalOver7,
    CHG_transitionalOver7Failure,
    CHG_receiveTransitionalTotal,
    CHG_transitionalTotalFailure,
    CHG_receiveLatestCountData,
    CHG_latestCountDataFailure,
    FSC_receiveOccupiedLocations,
    FSC_occupiedLocationsFailure,
    FSC_receiveOccupiedLocationsUncounted,
    FSC_occupiedLocationsUncountedFailure,
    FSC_receiveEmptyLocationsCounted,
    FSC_emptyLocationsCountedFailure,
    FSC_receiveEmptyLocationsUncounted,
    FSC_emptyLocationsUncountedFailure,
    FSC_receiveExpectedQty,
    FSC_expectedQtyFailure,
    FSC_receivevarianceQty,
    FSC_varianceQtyFailure,
    FSC_receiveUniqueLocs,
    FSC_uniqueLocsFailure,
    FSC_receiveLocsWithVarianceCount,
    FSC_locsWithVarianceCountFailure,
    FSC_receivePR,
    FSC_prFailure,
    FSC_receiveDmg,
    FSC_dmgFailure,
    FSC_receiveNotPutaway0,
    FSC_notPutaway0Failure,
    FSC_receiveNotPutaway1,
    FSC_notPutaway1Failure,
    FSC_receiveNotPutaway2,
    FSC_notPutaway2Failure,
    FSC_receiveNotPutaway3,
    FSC_notPutaway3Failure,
    FSC_receiveNotPutaway4,
    FSC_notPutaway4Failure,
    FSC_receiveNotPutaway5,
    FSC_notPutaway5Failure,
    FSC_receiveNotPutaway6,
    FSC_notPutaway6Failure,
    FSC_receiveNotPutaway7,
    FSC_notPutaway7Failure,
    FSC_receiveNotPutawayOver7,
    FSC_notPutawayOver7Failure,
    FSC_receiveTransitional0,
    FSC_transitional0Failure,
    FSC_receiveTransitional1,
    FSC_transitional1Failure,
    FSC_receiveTransitional2,
    FSC_transitional2Failure,
    FSC_receiveTransitional3,
    FSC_transitional3Failure,
    FSC_receiveTransitional4,
    FSC_transitional4Failure,
    FSC_receiveTransitional5,
    FSC_transitional5Failure,
    FSC_receiveTransitional6,
    FSC_transitional6Failure,
    FSC_receiveTransitional7,
    FSC_transitional7Failure,
    FSC_receiveTransitionalOver7,
    FSC_transitionalOver7Failure,
    FSC_receiveTransitionalTotal,
    FSC_transitionalTotalFailure,
    FSC_receiveLatestCountData,
    FSC_latestCountDataFailure,
    } from './progress.page.actions';

function* CHG_getOccupiedLocsCounted(){
    try{
        const locations = yield httpFetchOccupiedLocsCounted(`${CHG_API_URL}`);
        yield put(CHG_receiveOccupiedLocations(locations));
    } catch (error) {
        yield put(CHG_occupiedLocationsFailure(error));
    }
};

function* CHG_getOccupiedLocsUncounted(){
    try{
        const locations = yield httpFetchOccupiedLocsUncounted(`${CHG_API_URL}`);
        yield put(CHG_receiveOccupiedLocationsUncounted(locations));
    } catch (error) {
        yield put(CHG_occupiedLocationsUncountedFailure(error));
    }
};

function* CHG_getEmptyLocsCounted(){
    try{
        const locations = yield httpFetchEmptyLocsCounted(`${CHG_API_URL}`);
        yield put(CHG_receiveEmptyLocationsCounted(locations));
    } catch (error) {
        yield put(CHG_emptyLocationsCountedFailure(error));
    }
};

function* CHG_getEmptyLocsUncounted(){
    try{
        const locations = yield httpFetchEmptyLocsUncounted(`${CHG_API_URL}`);
        yield put(CHG_receiveEmptyLocationsUncounted(locations));
    } catch (error) {
        yield put(CHG_emptyLocationsUncountedFailure(error));
    }
};

function* CHG_getExpectedQty(){
    try{
        const sum = yield httpFetchTotalExpectedQty(`${CHG_API_URL}`);
        yield put(CHG_receiveExpectedQty(sum));
    } catch (error) {
        yield put(CHG_expectedQtyFailure(error));
    }
};

function* CHG_getVarianceQty(){
    try{
        const sum = yield httpFetchTotalVarianceQty(`${CHG_API_URL}`);
        yield put(CHG_receivevarianceQty(sum));
    } catch (error) {
        yield put(CHG_varianceQtyFailure(error));
    }
};

function* CHG_getUniqueLocsCounted(){
    try{
        const count = yield httpFetchUniqueLocsCounted(`${CHG_API_URL}`);
        yield put(CHG_receiveUniqueLocs(count));
    } catch (error) {
        yield put(CHG_uniqueLocsFailure(error));
    }
};

function* CHG_getTotalCountsWithVariance(){
    try{
        const locationsCount = yield httpFetchTotalCountsWithVariance(`${CHG_API_URL}`);
        yield put(CHG_receiveLocsWithVarianceCount(locationsCount));
    } catch (error) {
        yield put(CHG_locsWithVarianceCountFailure(error));
    }
};

function* CHG_getPr() {
    try {
        const pr = yield httpFetchPR(`${CHG_API_URL}`);
        yield put(CHG_receivePR(pr));
    } catch (error) {
        yield put(CHG_prFailure(error))
    };
   };

function* CHG_getDmg(){
    try{
        const damages = yield httpFetchDmg(`${CHG_API_URL}`);
        yield put(CHG_receiveDmg(damages));
    } catch (error) {
        yield put(CHG_dmgFailure(error));
    }
};

function* CHG_getNotPutAway0Day(){
    try{
        const notPutAway = yield httpFetchNotPutawayByDay(`${CHG_API_URL}`,'0');
        yield put(CHG_receiveNotPutaway0(notPutAway));
    } catch (error) {
        yield put(CHG_notPutaway0Failure(error));
    }
};

function* CHG_getNotPutAway1Day(){
    try{
        const notPutAway = yield httpFetchNotPutawayByDay(`${CHG_API_URL}`,'1');
        yield put(CHG_receiveNotPutaway1(notPutAway));
    } catch (error) {
        yield put(CHG_notPutaway1Failure(error));
    }
};

function* CHG_getNotPutAway2Day(){
    try{
        const notPutAway = yield httpFetchNotPutawayByDay(`${CHG_API_URL}`,'2');
        yield put(CHG_receiveNotPutaway2(notPutAway));
    } catch (error) {
        yield put(CHG_notPutaway2Failure(error));
    }
};

function* CHG_getNotPutAway3Day(){
    try{
        const notPutAway = yield httpFetchNotPutawayByDay(`${CHG_API_URL}`,'3');
        yield put(CHG_receiveNotPutaway3(notPutAway));
    } catch (error) {
        yield put(CHG_notPutaway3Failure(error));
    }
};

  
function* CHG_getNotPutAway4Day(){
    try{
        const notPutAway = yield httpFetchNotPutawayByDay(`${CHG_API_URL}`,'4');
        yield put(CHG_receiveNotPutaway4(notPutAway));
    } catch (error) {
        yield put(CHG_notPutaway4Failure(error));
    }
};

function* CHG_getNotPutAway5Day(){
    try{
        const notPutAway = yield httpFetchNotPutawayByDay(`${CHG_API_URL}`,'5');
        yield put(CHG_receiveNotPutaway5(notPutAway));
    } catch (error) {
        yield put(CHG_notPutaway5Failure(error));
    }
};


function* CHG_getNotPutAway6Day(){
    try{
        const notPutAway = yield httpFetchNotPutawayByDay(`${CHG_API_URL}`,'6');
        yield put(CHG_receiveNotPutaway6(notPutAway));
    } catch (error) {
        yield put(CHG_notPutaway6Failure(error));
    }
}; 

function* CHG_getNotPutAway7Day(){
    try{
        const notPutAway = yield httpFetchNotPutawayByDay(`${CHG_API_URL}`,'7');
        yield put(CHG_receiveNotPutaway7(notPutAway));
    } catch (error) {
        yield put(CHG_notPutaway7Failure(error));
    }
};


function* CHG_getNotPutAwayOver7Day(){
    try{
        const notPutAway = yield httpFetchNotPutawayByDay(`${CHG_API_URL}`,'over-7');
        yield put(CHG_receiveNotPutawayOver7(notPutAway));
    } catch (error) {
        yield put(CHG_notPutawayOver7Failure(error));
    }
};

function* CHG_getTransitional0Day(){
    try{
        const transitional = yield httpFetchTransitionalByDay(`${CHG_API_URL}`,'0-day');
        yield put(CHG_receiveTransitional0(transitional));
    } catch (error) {
        yield put(CHG_transitional0Failure(error));
    }
};

function* CHG_getTransitional1Day(){
    try{
        const transitional = yield httpFetchTransitionalByDay(`${CHG_API_URL}`,'1-day');
        yield put(CHG_receiveTransitional1(transitional));
    } catch (error) {
        yield put(CHG_transitional1Failure(error));
    }
};

function* CHG_getTransitional2Day(){
    try{
        const transitional = yield httpFetchTransitionalByDay(`${CHG_API_URL}`,'2-day');
        yield put(CHG_receiveTransitional2(transitional));
    } catch (error) {
        yield put(CHG_transitional2Failure(error));
    }
};

function* CHG_getTransitional3Day(){
    try{
        const transitional = yield httpFetchTransitionalByDay(`${CHG_API_URL}`,'3-day');
        yield put(CHG_receiveTransitional3(transitional));
    } catch (error) {
        yield put(CHG_transitional3Failure(error));
    }
};

  
function* CHG_getTransitional4Day(){
    try{
        const transitional = yield httpFetchTransitionalByDay(`${CHG_API_URL}`,'4-day');
        yield put(CHG_receiveTransitional4(transitional));
    } catch (error) {
        yield put(CHG_transitional4Failure(error));
    }
};

function* CHG_getTransitional5Day(){
    try{
        const transitional = yield httpFetchTransitionalByDay(`${CHG_API_URL}`,'5-day');
        yield put(CHG_receiveTransitional5(transitional));
    } catch (error) {
        yield put(CHG_transitional5Failure(error));
    }
};


function* CHG_getTransitional6Day(){
    try{
        const transitional = yield httpFetchTransitionalByDay(`${CHG_API_URL}`,'6-day');
        yield put(CHG_receiveTransitional6(transitional));
    } catch (error) {
        yield put(CHG_transitional6Failure(error));
    }
};
function* CHG_getTransitional7Day(){
    try{
        const transitional = yield httpFetchTransitionalByDay(`${CHG_API_URL}`,'7-day');
        yield put(CHG_receiveTransitional7(transitional));
    } catch (error) {
        yield put(CHG_transitional7Failure(error));
    }
};


function* CHG_getTransitionalOver7Day(){
    try{
        const transitional = yield httpFetchTransitionalByDay(`${CHG_API_URL}`,'over-7-day');
        yield put(CHG_receiveTransitionalOver7(transitional));
    } catch (error) {
        yield put(CHG_transitionalOver7Failure(error));
    }
};

function* CHG_getTransitionalTotal(){
    try{
        const transitional = yield httpFetchTransitionalByDay(`${CHG_API_URL}`,'total');
        yield put(CHG_receiveTransitionalTotal(transitional));
    } catch (error) {
        yield put(CHG_transitionalTotalFailure(error));
    }
};

function* CHG_getLatestCountData(){
    try{
        const latestCount = yield httpLatestCountData(`${CHG_API_URL}`);
        yield put(CHG_receiveLatestCountData(latestCount));
    } catch (error) {
        yield put(CHG_latestCountDataFailure(error));
    }
};

function* FSC_getOccupiedLocsCounted(){
    try{
        const locations = yield httpFetchOccupiedLocsCounted(`${FSC_API_URL}`);
        yield put(FSC_receiveOccupiedLocations(locations));
    } catch (error) {
        yield put(FSC_occupiedLocationsFailure(error));
    }
};

function* FSC_getOccupiedLocsUncounted(){
    try{
        const locations = yield httpFetchOccupiedLocsUncounted(`${FSC_API_URL}`);
        yield put(FSC_receiveOccupiedLocationsUncounted(locations));
    } catch (error) {
        yield put(FSC_occupiedLocationsUncountedFailure(error));
    }
};

function* FSC_getEmptyLocsCounted(){
    try{
        const locations = yield httpFetchEmptyLocsCounted(`${FSC_API_URL}`);
        yield put(FSC_receiveEmptyLocationsCounted(locations));
    } catch (error) {
        yield put(FSC_emptyLocationsCountedFailure(error));
    }
};

function* FSC_getEmptyLocsUncounted(){
    try{
        const locations = yield httpFetchEmptyLocsUncounted(`${FSC_API_URL}`);
        yield put(FSC_receiveEmptyLocationsUncounted(locations));
    } catch (error) {
        yield put(FSC_emptyLocationsUncountedFailure(error));
    }
};

function* FSC_getExpectedQty(){
    try{
        const sum = yield httpFetchTotalExpectedQty(`${FSC_API_URL}`);
        yield put(FSC_receiveExpectedQty(sum));
    } catch (error) {
        yield put(FSC_expectedQtyFailure(error));
    }
};

function* FSC_getVarianceQty(){
    try{
        const sum = yield httpFetchTotalVarianceQty(`${FSC_API_URL}`);
        yield put(FSC_receivevarianceQty(sum));
    } catch (error) {
        yield put(FSC_varianceQtyFailure(error));
    }
};

function* FSC_getUniqueLocsCounted(){
    try{
        const count = yield httpFetchUniqueLocsCounted(`${FSC_API_URL}`);
        yield put(FSC_receiveUniqueLocs(count));
    } catch (error) {
        yield put(FSC_uniqueLocsFailure(error));
    }
};

function* FSC_getTotalCountsWithVariance(){
    try{
        const locationsCount = yield httpFetchTotalCountsWithVariance(`${FSC_API_URL}`);
        yield put(FSC_receiveLocsWithVarianceCount(locationsCount));
    } catch (error) {
        yield put(FSC_locsWithVarianceCountFailure(error));
    }
};

function* FSC_getPr() {
    try {
        const pr = yield httpFetchPR(`${FSC_API_URL}`);
        yield put(FSC_receivePR(pr));
    } catch (error) {
        yield put(FSC_prFailure(error))
    };
   };

function* FSC_getDmg(){
    try{
        const damages = yield httpFetchDmg(`${FSC_API_URL}`);
        yield put(FSC_receiveDmg(damages));
    } catch (error) {
        yield put(FSC_dmgFailure(error));
    }
};

function* FSC_getNotPutAway0Day(){
    try{
        const notPutAway = yield httpFetchNotPutawayByDay(`${FSC_API_URL}`,'0');
        yield put(FSC_receiveNotPutaway0(notPutAway));
    } catch (error) {
        yield put(FSC_notPutaway0Failure(error));
    }
};

function* FSC_getNotPutAway1Day(){
    try{
        const notPutAway = yield httpFetchNotPutawayByDay(`${FSC_API_URL}`,'1');
        yield put(FSC_receiveNotPutaway1(notPutAway));
    } catch (error) {
        yield put(FSC_notPutaway1Failure(error));
    }
};

function* FSC_getNotPutAway2Day(){
    try{
        const notPutAway = yield httpFetchNotPutawayByDay(`${FSC_API_URL}`,'2');
        yield put(FSC_receiveNotPutaway2(notPutAway));
    } catch (error) {
        yield put(FSC_notPutaway2Failure(error));
    }
};

function* FSC_getNotPutAway3Day(){
    try{
        const notPutAway = yield httpFetchNotPutawayByDay(`${FSC_API_URL}`,'3');
        yield put(FSC_receiveNotPutaway3(notPutAway));
    } catch (error) {
        yield put(FSC_notPutaway3Failure(error));
    }
};

  
function* FSC_getNotPutAway4Day(){
    try{
        const notPutAway = yield httpFetchNotPutawayByDay(`${FSC_API_URL}`,'4');
        yield put(FSC_receiveNotPutaway4(notPutAway));
    } catch (error) {
        yield put(FSC_notPutaway4Failure(error));
    }
};

function* FSC_getNotPutAway5Day(){
    try{
        const notPutAway = yield httpFetchNotPutawayByDay(`${FSC_API_URL}`,'5');
        yield put(FSC_receiveNotPutaway5(notPutAway));
    } catch (error) {
        yield put(FSC_notPutaway5Failure(error));
    }
};


function* FSC_getNotPutAway6Day(){
    try{
        const notPutAway = yield httpFetchNotPutawayByDay(`${FSC_API_URL}`,'6');
        yield put(FSC_receiveNotPutaway6(notPutAway));
    } catch (error) {
        yield put(FSC_notPutaway6Failure(error));
    }
}; 

function* FSC_getNotPutAway7Day(){
    try{
        const notPutAway = yield httpFetchNotPutawayByDay(`${FSC_API_URL}`,'7');
        yield put(FSC_receiveNotPutaway7(notPutAway));
    } catch (error) {
        yield put(FSC_notPutaway7Failure(error));
    }
};


function* FSC_getNotPutAwayOver7Day(){
    try{
        const notPutAway = yield httpFetchNotPutawayByDay(`${FSC_API_URL}`,'over-7');
        yield put(FSC_receiveNotPutawayOver7(notPutAway));
    } catch (error) {
        yield put(FSC_notPutawayOver7Failure(error));
    }
};

function* FSC_getTransitional0Day(){
    try{
        const transitional = yield httpFetchTransitionalByDay(`${FSC_API_URL}`,'0-day');
        yield put(FSC_receiveTransitional0(transitional));
    } catch (error) {
        yield put(FSC_transitional0Failure(error));
    }
};

function* FSC_getTransitional1Day(){
    try{
        const transitional = yield httpFetchTransitionalByDay(`${FSC_API_URL}`,'1-day');
        yield put(FSC_receiveTransitional1(transitional));
    } catch (error) {
        yield put(FSC_transitional1Failure(error));
    }
};

function* FSC_getTransitional2Day(){
    try{
        const transitional = yield httpFetchTransitionalByDay(`${FSC_API_URL}`,'2-day');
        yield put(FSC_receiveTransitional2(transitional));
    } catch (error) {
        yield put(FSC_transitional2Failure(error));
    }
};

function* FSC_getTransitional3Day(){
    try{
        const transitional = yield httpFetchTransitionalByDay(`${FSC_API_URL}`,'3-day');
        yield put(FSC_receiveTransitional3(transitional));
    } catch (error) {
        yield put(FSC_transitional3Failure(error));
    }
};

  
function* FSC_getTransitional4Day(){
    try{
        const transitional = yield httpFetchTransitionalByDay(`${FSC_API_URL}`,'4-day');
        yield put(FSC_receiveTransitional4(transitional));
    } catch (error) {
        yield put(FSC_transitional4Failure(error));
    }
};

function* FSC_getTransitional5Day(){
    try{
        const transitional = yield httpFetchTransitionalByDay(`${FSC_API_URL}`,'5-day');
        yield put(FSC_receiveTransitional5(transitional));
    } catch (error) {
        yield put(FSC_transitional5Failure(error));
    }
};


function* FSC_getTransitional6Day(){
    try{
        const transitional = yield httpFetchTransitionalByDay(`${FSC_API_URL}`,'6-day');
        yield put(FSC_receiveTransitional6(transitional));
    } catch (error) {
        yield put(FSC_transitional6Failure(error));
    }
};
function* FSC_getTransitional7Day(){
    try{
        const transitional = yield httpFetchTransitionalByDay(`${FSC_API_URL}`,'7-day');
        yield put(FSC_receiveTransitional7(transitional));
    } catch (error) {
        yield put(FSC_transitional7Failure(error));
    }
};


function* FSC_getTransitionalOver7Day(){
    try{
        const transitional = yield httpFetchTransitionalByDay(`${FSC_API_URL}`,'over-7-day');
        yield put(FSC_receiveTransitionalOver7(transitional));
    } catch (error) {
        yield put(FSC_transitionalOver7Failure(error));
    }
};

function* FSC_getTransitionalTotal(){
    try{
        const transitional = yield httpFetchTransitionalByDay(`${FSC_API_URL}`,'total');
        yield put(FSC_receiveTransitionalTotal(transitional));
    } catch (error) {
        yield put(FSC_transitionalTotalFailure(error));
    }
};

function* FSC_getLatestCountData(){
    try{
        const latestCount = yield httpLatestCountData(`${FSC_API_URL}`);
        yield put(FSC_receiveLatestCountData(latestCount));
    } catch (error) {
        yield put(FSC_latestCountDataFailure(error));
    }
};

function* CHG_requestOccupiedLocsSaga(){
    yield takeLatest(ProgressPageActionTypes.CHG_OCCUPIED_LOCS_COUNTED_START, CHG_getOccupiedLocsCounted)
};

function* CHG_requestOccupiedLocsUncountedSaga(){
    yield takeLatest(ProgressPageActionTypes.CHG_OCCUPIED_LOCS_UNCOUNTED_START, CHG_getOccupiedLocsUncounted)
};

function* CHG_requestEmptyLocsCountedSaga(){
    yield takeLatest(ProgressPageActionTypes.CHG_EMPTY_LOCS_COUNTED_START, CHG_getEmptyLocsCounted)
};

function* CHG_requestEmptyLocsUncountedSaga(){
    yield takeLatest(ProgressPageActionTypes.CHG_EMPTY_LOCS_UNCOUNTED_START, CHG_getEmptyLocsUncounted)
};

function* CHG_requestExpectedQtySaga(){
    yield takeLatest(ProgressPageActionTypes.CHG_EXPECTED_QTY_START, CHG_getExpectedQty)
};

function* CHG_requestVarianceQtySaga(){
    yield takeLatest(ProgressPageActionTypes.CHG_VARIANCE_QTY_START, CHG_getVarianceQty)
};

function* CHG_requestUniqueLocsCountedSaga(){
    yield takeLatest(ProgressPageActionTypes.CHG_UNIQUE_LOCS_COUNTED_START, CHG_getUniqueLocsCounted)
};

function* CHG_requestTotalCountsWithVarianceSaga(){
    yield takeLatest(ProgressPageActionTypes.CHG_TOTAL_COUNTS_WITH_VARIANCE_START, CHG_getTotalCountsWithVariance)
};

function* CHG_getPrSaga() {
    yield takeLatest(ProgressPageActionTypes.CHG_PR_START, CHG_getPr)
}

function* CHG_getDmgSaga() {
    yield takeLatest(ProgressPageActionTypes.CHG_PR_START, CHG_getDmg)
};

function* CHG_getNotPutAway0DaySaga() {
    yield takeLatest(ProgressPageActionTypes.CHG_NOT_PUTAWAY_0_START, CHG_getNotPutAway0Day)
};

function* CHG_getNotPutAway1DaySaga() {
    yield takeLatest(ProgressPageActionTypes.CHG_NOT_PUTAWAY_1_START, CHG_getNotPutAway1Day)
};
    
function* CHG_getNotPutAway2DaySaga() {
    yield takeLatest(ProgressPageActionTypes.CHG_NOT_PUTAWAY_2_START, CHG_getNotPutAway2Day)
};
  
function* CHG_getNotPutAway3DaySaga() {
    yield takeLatest(ProgressPageActionTypes.CHG_NOT_PUTAWAY_3_START, CHG_getNotPutAway3Day)
};

function* CHG_getNotPutAway4DaySaga() {
    yield takeLatest(ProgressPageActionTypes.CHG_NOT_PUTAWAY_4_START, CHG_getNotPutAway4Day)
};

function* CHG_getNotPutAway5DaySaga() {
    yield takeLatest(ProgressPageActionTypes.CHG_NOT_PUTAWAY_5_START, CHG_getNotPutAway5Day)
};

function* CHG_getNotPutAway6DaySaga() {
    yield takeLatest(ProgressPageActionTypes.CHG_NOT_PUTAWAY_6_START, CHG_getNotPutAway6Day)
};

function* CHG_getNotPutAway7DaySaga() {
    yield takeLatest(ProgressPageActionTypes.CHG_NOT_PUTAWAY_7_START, CHG_getNotPutAway7Day)
};
  
function* CHG_getNotPutAwayOver7DaySaga() {
    yield takeLatest(ProgressPageActionTypes.CHG_NOT_PUTAWAY_7_START, CHG_getNotPutAwayOver7Day)
};

function* CHG_getTransitional0DaySaga() {
    yield takeLatest(ProgressPageActionTypes.CHG_NOT_PUTAWAY_1_START, CHG_getTransitional0Day)
};

function* CHG_getTransitional1DaySaga() {
    yield takeLatest(ProgressPageActionTypes.CHG_NOT_PUTAWAY_1_START, CHG_getTransitional1Day)
};
    
function* CHG_getTransitional2DaySaga() {
    yield takeLatest(ProgressPageActionTypes.CHG_NOT_PUTAWAY_2_START, CHG_getTransitional2Day)
};
  
function* CHG_getTransitional3DaySaga() {
    yield takeLatest(ProgressPageActionTypes.CHG_NOT_PUTAWAY_3_START, CHG_getTransitional3Day)
};

function* CHG_getTransitional4DaySaga() {
    yield takeLatest(ProgressPageActionTypes.CHG_NOT_PUTAWAY_4_START, CHG_getTransitional4Day)
};

function* CHG_getTransitional5DaySaga() {
    yield takeLatest(ProgressPageActionTypes.CHG_NOT_PUTAWAY_5_START, CHG_getTransitional5Day)
};

function* CHG_getTransitional6DaySaga() {
    yield takeLatest(ProgressPageActionTypes.CHG_NOT_PUTAWAY_6_START, CHG_getTransitional6Day)
};

function* CHG_getTransitional7DaySaga() {
    yield takeLatest(ProgressPageActionTypes.CHG_NOT_PUTAWAY_7_START, CHG_getTransitional7Day)
};
  
function* CHG_getTransitionalOver7DaySaga() {
    yield takeLatest(ProgressPageActionTypes.CHG_NOT_PUTAWAY_7_START, CHG_getTransitionalOver7Day)
};

function* CHG_getTransitionalTotalSaga() {
    yield takeLatest(ProgressPageActionTypes.CHG_TRANSITIONAL_TOTAL_START, CHG_getTransitionalTotal)
};

function* CHG_getLatestCountDataSaga() {
    yield takeLatest(ProgressPageActionTypes.CHG_LATEST_COUNT_DATA_START, CHG_getLatestCountData)
};

function* FSC_requestOccupiedLocsSaga(){
    yield takeLatest(ProgressPageActionTypes.FSC_OCCUPIED_LOCS_COUNTED_START, FSC_getOccupiedLocsCounted)
};

function* FSC_requestOccupiedLocsUncountedSaga(){
    yield takeLatest(ProgressPageActionTypes.FSC_OCCUPIED_LOCS_UNCOUNTED_START, FSC_getOccupiedLocsUncounted)
};

function* FSC_requestEmptyLocsCountedSaga(){
    yield takeLatest(ProgressPageActionTypes.FSC_EMPTY_LOCS_COUNTED_START, FSC_getEmptyLocsCounted)
};

function* FSC_requestEmptyLocsUncountedSaga(){
    yield takeLatest(ProgressPageActionTypes.FSC_EMPTY_LOCS_UNCOUNTED_START, FSC_getEmptyLocsUncounted)
};

function* FSC_requestExpectedQtySaga(){
    yield takeLatest(ProgressPageActionTypes.FSC_EXPECTED_QTY_START, FSC_getExpectedQty)
};

function* FSC_requestVarianceQtySaga(){
    yield takeLatest(ProgressPageActionTypes.FSC_VARIANCE_QTY_START, FSC_getVarianceQty)
};

function* FSC_requestUniqueLocsCountedSaga(){
    yield takeLatest(ProgressPageActionTypes.FSC_UNIQUE_LOCS_COUNTED_START, FSC_getUniqueLocsCounted)
};

function* FSC_requestTotalCountsWithVarianceSaga(){
    yield takeLatest(ProgressPageActionTypes.FSC_TOTAL_COUNTS_WITH_VARIANCE_START, FSC_getTotalCountsWithVariance)
};

function* FSC_getPrSaga() {
    yield takeLatest(ProgressPageActionTypes.FSC_PR_START, FSC_getPr)
}

function* FSC_getDmgSaga() {
    yield takeLatest(ProgressPageActionTypes.FSC_PR_START, FSC_getDmg)
};

function* FSC_getNotPutAway0DaySaga() {
    yield takeLatest(ProgressPageActionTypes.FSC_NOT_PUTAWAY_0_START, FSC_getNotPutAway0Day)
};

function* FSC_getNotPutAway1DaySaga() {
    yield takeLatest(ProgressPageActionTypes.FSC_NOT_PUTAWAY_1_START, FSC_getNotPutAway1Day)
};
    
function* FSC_getNotPutAway2DaySaga() {
    yield takeLatest(ProgressPageActionTypes.FSC_NOT_PUTAWAY_2_START, FSC_getNotPutAway2Day)
};
  
function* FSC_getNotPutAway3DaySaga() {
    yield takeLatest(ProgressPageActionTypes.FSC_NOT_PUTAWAY_3_START, FSC_getNotPutAway3Day)
};

function* FSC_getNotPutAway4DaySaga() {
    yield takeLatest(ProgressPageActionTypes.FSC_NOT_PUTAWAY_4_START, FSC_getNotPutAway4Day)
};

function* FSC_getNotPutAway5DaySaga() {
    yield takeLatest(ProgressPageActionTypes.FSC_NOT_PUTAWAY_5_START, FSC_getNotPutAway5Day)
};

function* FSC_getNotPutAway6DaySaga() {
    yield takeLatest(ProgressPageActionTypes.FSC_NOT_PUTAWAY_6_START, FSC_getNotPutAway6Day)
};

function* FSC_getNotPutAway7DaySaga() {
    yield takeLatest(ProgressPageActionTypes.FSC_NOT_PUTAWAY_7_START, FSC_getNotPutAway7Day)
};
  
function* FSC_getNotPutAwayOver7DaySaga() {
    yield takeLatest(ProgressPageActionTypes.FSC_NOT_PUTAWAY_7_START, FSC_getNotPutAwayOver7Day)
};

function* FSC_getTransitional0DaySaga() {
    yield takeLatest(ProgressPageActionTypes.FSC_NOT_PUTAWAY_1_START, FSC_getTransitional0Day)
};

function* FSC_getTransitional1DaySaga() {
    yield takeLatest(ProgressPageActionTypes.FSC_NOT_PUTAWAY_1_START, FSC_getTransitional1Day)
};
    
function* FSC_getTransitional2DaySaga() {
    yield takeLatest(ProgressPageActionTypes.FSC_NOT_PUTAWAY_2_START, FSC_getTransitional2Day)
};
  
function* FSC_getTransitional3DaySaga() {
    yield takeLatest(ProgressPageActionTypes.FSC_NOT_PUTAWAY_3_START, FSC_getTransitional3Day)
};

function* FSC_getTransitional4DaySaga() {
    yield takeLatest(ProgressPageActionTypes.FSC_NOT_PUTAWAY_4_START, FSC_getTransitional4Day)
};

function* FSC_getTransitional5DaySaga() {
    yield takeLatest(ProgressPageActionTypes.FSC_NOT_PUTAWAY_5_START, FSC_getTransitional5Day)
};

function* FSC_getTransitional6DaySaga() {
    yield takeLatest(ProgressPageActionTypes.FSC_NOT_PUTAWAY_6_START, FSC_getTransitional6Day)
};

function* FSC_getTransitional7DaySaga() {
    yield takeLatest(ProgressPageActionTypes.FSC_NOT_PUTAWAY_7_START, FSC_getTransitional7Day)
};
  
function* FSC_getTransitionalOver7DaySaga() {
    yield takeLatest(ProgressPageActionTypes.FSC_NOT_PUTAWAY_7_START, FSC_getTransitionalOver7Day)
};

function* FSC_getTransitionalTotalSaga() {
    yield takeLatest(ProgressPageActionTypes.FSC_TRANSITIONAL_TOTAL_START, FSC_getTransitionalTotal)
};

function* FSC_getLatestCountDataSaga() {
    yield takeLatest(ProgressPageActionTypes.FSC_LATEST_COUNT_DATA_START, FSC_getLatestCountData)
};


export function* progressPageSagas(){
    yield all([
        call(CHG_requestOccupiedLocsSaga),
        call(CHG_requestOccupiedLocsUncountedSaga),
        call(CHG_requestEmptyLocsCountedSaga),
        call(CHG_requestEmptyLocsUncountedSaga),
        call(CHG_requestExpectedQtySaga),
        call(CHG_requestVarianceQtySaga),
        call(CHG_requestUniqueLocsCountedSaga),
        call(CHG_requestTotalCountsWithVarianceSaga),
        call(CHG_getPrSaga),
        call(CHG_getDmgSaga),
        call(CHG_getNotPutAway0DaySaga),
        call(CHG_getNotPutAway1DaySaga),
        call(CHG_getNotPutAway2DaySaga),
        call(CHG_getNotPutAway3DaySaga),
        call(CHG_getNotPutAway4DaySaga),
        call(CHG_getNotPutAway5DaySaga),
        call(CHG_getNotPutAway6DaySaga),
        call(CHG_getNotPutAway7DaySaga),
        call(CHG_getNotPutAwayOver7DaySaga),
        call(CHG_getTransitional0DaySaga),
        call(CHG_getTransitional1DaySaga),
        call(CHG_getTransitional2DaySaga),
        call(CHG_getTransitional3DaySaga),
        call(CHG_getTransitional4DaySaga),
        call(CHG_getTransitional5DaySaga),
        call(CHG_getTransitional6DaySaga),
        call(CHG_getTransitional7DaySaga),
        call(CHG_getTransitionalOver7DaySaga),
        call(CHG_getTransitionalTotalSaga),
        call(CHG_getLatestCountDataSaga),
        call(FSC_requestOccupiedLocsSaga),
        call(FSC_requestOccupiedLocsUncountedSaga),
        call(FSC_requestEmptyLocsCountedSaga),
        call(FSC_requestEmptyLocsUncountedSaga),
        call(FSC_requestExpectedQtySaga),
        call(FSC_requestVarianceQtySaga),
        call(FSC_requestUniqueLocsCountedSaga),
        call(FSC_requestTotalCountsWithVarianceSaga),
        call(FSC_getPrSaga),
        call(FSC_getDmgSaga),
        call(FSC_getNotPutAway0DaySaga),
        call(FSC_getNotPutAway1DaySaga),
        call(FSC_getNotPutAway2DaySaga),
        call(FSC_getNotPutAway3DaySaga),
        call(FSC_getNotPutAway4DaySaga),
        call(FSC_getNotPutAway5DaySaga),
        call(FSC_getNotPutAway6DaySaga),
        call(FSC_getNotPutAway7DaySaga),
        call(FSC_getNotPutAwayOver7DaySaga),
        call(FSC_getTransitional0DaySaga),
        call(FSC_getTransitional1DaySaga),
        call(FSC_getTransitional2DaySaga),
        call(FSC_getTransitional3DaySaga),
        call(FSC_getTransitional4DaySaga),
        call(FSC_getTransitional5DaySaga),
        call(FSC_getTransitional6DaySaga),
        call(FSC_getTransitional7DaySaga),
        call(FSC_getTransitionalOver7DaySaga),
        call(FSC_getTransitionalTotalSaga),
        call(FSC_getLatestCountDataSaga),
    ]);
};