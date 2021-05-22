import {call, put, takeLatest, all} from 'redux-saga/effects';

import ProgressPageActionTypes from './progress.page.types';

import { 
    CHG_fetchOccupiedLocsCounted,
    CHG_fetchOccupiedLocsUncounted,
    CHG_fetchEmptyLocsCounted,
    CHG_fetchEmptyLocsUncounted,
    CHG_fetchTotalExpectedQty,
    CHG_fetchTotalVarianceQty,
    CHG_fetchUniqueLocsCounted,
    CHG_fetchTotalCountsWithVariance,
    CHG_fetchPR,
    CHG_fetchDmg,
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
    } from './progress.page.actions';
    

function* CHG_getOccupiedLocsCounted(){
    try{
        const locations = yield CHG_fetchOccupiedLocsCounted();
        yield put(CHG_receiveOccupiedLocations(locations));
    } catch (error) {
        yield put(CHG_occupiedLocationsFailure(error));
    }
};

function* CHG_getOccupiedLocsUncounted(){
    try{
        const locations = yield CHG_fetchOccupiedLocsUncounted();
        yield put(CHG_receiveOccupiedLocationsUncounted(locations));
    } catch (error) {
        yield put(CHG_occupiedLocationsUncountedFailure(error));
    }
};

function* CHG_getEmptyLocsCounted(){
    try{
        const locations = yield CHG_fetchEmptyLocsCounted();
        yield put(CHG_receiveEmptyLocationsCounted(locations));
    } catch (error) {
        yield put(CHG_emptyLocationsCountedFailure(error));
    }
};

function* CHG_getEmptyLocsUncounted(){
    try{
        const locations = yield CHG_fetchEmptyLocsUncounted();
        yield put(CHG_receiveEmptyLocationsUncounted(locations));
    } catch (error) {
        yield put(CHG_emptyLocationsUncountedFailure(error));
    }
};

function* CHG_getExpectedQty(){
    try{
        const sum = yield CHG_fetchTotalExpectedQty();
        yield put(CHG_receiveExpectedQty(sum));
    } catch (error) {
        yield put(CHG_expectedQtyFailure(error));
    }
};

function* CHG_getVarianceQty(){
    try{
        const sum = yield CHG_fetchTotalVarianceQty();
        yield put(CHG_receivevarianceQty(sum));
    } catch (error) {
        yield put(CHG_varianceQtyFailure(error));
    }
};

function* CHG_getUniqueLocsCounted(){
    try{
        const count = yield CHG_fetchUniqueLocsCounted();
        yield put(CHG_receiveUniqueLocs(count));
    } catch (error) {
        yield put(CHG_uniqueLocsFailure(error));
    }
};

function* CHG_getTotalCountsWithVariance(){
    try{
        const locationsCount = yield CHG_fetchTotalCountsWithVariance();
        yield put(CHG_receiveLocsWithVarianceCount(locationsCount));
    } catch (error) {
        yield put(CHG_locsWithVarianceCountFailure(error));
    }
};

function* CHG_getPr() {
    try {
        const pr = yield CHG_fetchPR();
        yield put(CHG_receivePR(pr));
    } catch (error) {
        yield put(CHG_prFailure(error))
    };
   };

function* CHG_getDmg(){
    try{
        const damages = yield CHG_fetchDmg();
        yield put(CHG_receiveDmg(damages));
    } catch (error) {
        yield put(CHG_dmgFailure(error));
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
}


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
    ]);
};