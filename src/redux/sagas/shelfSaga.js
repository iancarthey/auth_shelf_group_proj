import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* shelfSaga(){
    takeEvery('FETCH_SHELF', getShelfItemSaga);
    takeEvery('ADD_SHELF_ITEM', addShelfItemSaga);
}

function* getShelfItemSaga(action){
    try{
        const shelfResponse = yield call(axios.get, '/api/shelf')
        yield put ({
            type: 'SET_SHELF',
            payload: shelfResponse.data
        });
    }catch (error){
        console.log('Error in getting shelf items saga: ', error);
        
    }
}

function* addShelfItemSaga(action){
    try{
        yield call(axios.post, '/api/shelf', action.payload);
        yield put({
            type: 'FETCH_SHELF'
        })
    } catch (error){
        console.log('WE AIN"T HAD NOTHING BUT MAGGOTY ERRORS FOR 3 STANKIN DAYS: ', error);
    }
}

export default shelfSaga;