import {call, put, takeLatest, all} from 'redux-saga/effects';

import ProgressPageActionTypes from './progress.page.types';

import { 
    CHG_API_URL,
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

function* CHG_getNotPutAway1Day(){
    try{
        console.log('HELLLLLLLLLLLOOOOOOOOOOOO')
        const damages = yield httpFetchNotPutawayByDay(`${CHG_API_URL}`,'1');
        yield put(CHG_receiveNotPutaway1(damages));
    } catch (error) {
        yield put(CHG_notPutaway1Failure(error));
    }
};

function* CHG_getNotPutAway2Day(){
    try{
        const damages = yield httpFetchNotPutawayByDay(`${CHG_API_URL}`,'2');
        yield put(CHG_receiveNotPutaway2(damages));
    } catch (error) {
        yield put(CHG_notPutaway2Failure(error));
    }
};

function* CHG_getNotPutAway3Day(){
    try{
        const damages = yield httpFetchNotPutawayByDay(`${CHG_API_URL}`,'3');
        yield put(CHG_receiveNotPutaway3(damages));
    } catch (error) {
        yield put(CHG_notPutaway3Failure(error));
    }
};

  
function* CHG_getNotPutAway4Day(){
    try{
        const damages = yield httpFetchNotPutawayByDay(`${CHG_API_URL}`,'4');
        yield put(CHG_receiveNotPutaway4(damages));
    } catch (error) {
        yield put(CHG_notPutaway4Failure(error));
    }
};

function* CHG_getNotPutAway5Day(){
    try{
        const damages = yield httpFetchNotPutawayByDay(`${CHG_API_URL}`,'5');
        yield put(CHG_receiveNotPutaway5(damages));
    } catch (error) {
        yield put(CHG_notPutaway5Failure(error));
    }
};


function* CHG_getNotPutAway6Day(){
    try{
        const damages = yield httpFetchNotPutawayByDay(`${CHG_API_URL}`,'6');
        yield put(CHG_receiveNotPutaway6(damages));
    } catch (error) {
        yield put(CHG_notPutaway6Failure(error));
    }
};
function* CHG_getNotPutAway7Day(){
    try{
        const damages = yield httpFetchNotPutawayByDay(`${CHG_API_URL}`,'7');
        yield put(CHG_receiveNotPutaway7(damages));
    } catch (error) {
        yield put(CHG_notPutaway7Failure(error));
    }
};


function* CHG_getNotPutAwayOver7Day(){
    try{
        const damages = yield httpFetchNotPutawayByDay(`${CHG_API_URL}`,'over-7');
        yield put(CHG_receiveNotPutawayOver7(damages));
    } catch (error) {
        yield put(CHG_notPutawayOver7Failure(error));
    }
};


function* CHG_getTransitional1Day(){
    try{
        const damages = yield httpFetchTransitionalByDay(`${CHG_API_URL}`,'1');
        yield put(CHG_receiveTransitional1(damages));
    } catch (error) {
        yield put(CHG_transitional1Failure(error));
    }
};

function* CHG_getTransitional2Day(){
    try{
        const damages = yield httpFetchTransitionalByDay(`${CHG_API_URL}`,'2');
        yield put(CHG_receiveTransitional2(damages));
    } catch (error) {
        yield put(CHG_transitional2Failure(error));
    }
};

function* CHG_getTransitional3Day(){
    try{
        const damages = yield httpFetchTransitionalByDay(`${CHG_API_URL}`,'3');
        yield put(CHG_receiveTransitional3(damages));
    } catch (error) {
        yield put(CHG_transitional3Failure(error));
    }
};

  
function* CHG_getTransitional4Day(){
    try{
        const damages = yield httpFetchTransitionalByDay(`${CHG_API_URL}`,'4');
        yield put(CHG_receiveTransitional4(damages));
    } catch (error) {
        yield put(CHG_transitional4Failure(error));
    }
};

function* CHG_getTransitional5Day(){
    try{
        const damages = yield httpFetchTransitionalByDay(`${CHG_API_URL}`,'5');
        yield put(CHG_receiveTransitional5(damages));
    } catch (error) {
        yield put(CHG_transitional5Failure(error));
    }
};


function* CHG_getTransitional6Day(){
    try{
        const damages = yield httpFetchTransitionalByDay(`${CHG_API_URL}`,'6');
        yield put(CHG_receiveTransitional6(damages));
    } catch (error) {
        yield put(CHG_transitional6Failure(error));
    }
};
function* CHG_getTransitional7Day(){
    try{
        const damages = yield httpFetchTransitionalByDay(`${CHG_API_URL}`,'7');
        yield put(CHG_receiveTransitional7(damages));
    } catch (error) {
        yield put(CHG_transitional7Failure(error));
    }
};


function* CHG_getTransitionalOver7Day(){
    try{
        const damages = yield httpFetchTransitionalByDay(`${CHG_API_URL}`,'over-7');
        yield put(CHG_receiveTransitionalOver7(damages));
    } catch (error) {
        yield put(CHG_transitionalOver7Failure(error));
    }
};


export function* CHG_requestOccupiedLocsSaga(){
    yield takeLatest(ProgressPageActionTypes.CHG_OCCUPIED_LOCS_COUNTED_START, CHG_getOccupiedLocsCounted)
};

export function* CHG_requestOccupiedLocsUncountedSaga(){
    yield takeLatest(ProgressPageActionTypes.CHG_OCCUPIED_LOCS_UNCOUNTED_START, CHG_getOccupiedLocsUncounted)
};

export function* CHG_requestEmptyLocsCountedSaga(){
    yield takeLatest(ProgressPageActionTypes.CHG_EMPTY_LOCS_COUNTED_START, CHG_getEmptyLocsCounted)
};

export function* CHG_requestEmptyLocsUncountedSaga(){
    yield takeLatest(ProgressPageActionTypes.CHG_EMPTY_LOCS_UNCOUNTED_START, CHG_getEmptyLocsUncounted)
};

export function* CHG_requestExpectedQtySaga(){
    yield takeLatest(ProgressPageActionTypes.CHG_EXPECTED_QTY_START, CHG_getExpectedQty)
};

export function* CHG_requestVarianceQtySaga(){
    yield takeLatest(ProgressPageActionTypes.CHG_VARIANCE_QTY_START, CHG_getVarianceQty)
};

export function* CHG_requestUniqueLocsCountedSaga(){
    yield takeLatest(ProgressPageActionTypes.CHG_UNIQUE_LOCS_COUNTED_START, CHG_getUniqueLocsCounted)
};

export function* CHG_requestTotalCountsWithVarianceSaga(){
    yield takeLatest(ProgressPageActionTypes.CHG_TOTAL_COUNTS_WITH_VARIANCE_START, CHG_getTotalCountsWithVariance)
};

function* CHG_getPrSaga() {
    yield takeLatest(ProgressPageActionTypes.CHG_PR_START, CHG_getPr)
}

function* CHG_getDmgSaga() {
    yield takeLatest(ProgressPageActionTypes.CHG_PR_START, CHG_getDmg)
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
        call(CHG_getNotPutAway1DaySaga),
        call(CHG_getNotPutAway2DaySaga),
        call(CHG_getNotPutAway3DaySaga),
        call(CHG_getNotPutAway4DaySaga),
        call(CHG_getNotPutAway5DaySaga),
        call(CHG_getNotPutAway6DaySaga),
        call(CHG_getNotPutAway7DaySaga),
        call(CHG_getNotPutAwayOver7DaySaga),
        call(CHG_getTransitional1DaySaga),
        call(CHG_getTransitional2DaySaga),
        call(CHG_getTransitional3DaySaga),
        call(CHG_getTransitional4DaySaga),
        call(CHG_getTransitional5DaySaga),
        call(CHG_getTransitional6DaySaga),
        call(CHG_getTransitional7DaySaga),
        call(CHG_getTransitionalOver7DaySaga),
    ]);
};