import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* shelfSaga(){
    yield takeEvery('FETCH_SHELF', getShelfItemSaga);
    yield takeEvery('ADD_SHELF_ITEM', addShelfItemSaga);
}

//sends get request to server and will receive shelf items from the server and store it in shelfResponse.data
function* getShelfItemSaga(action){
    try{
        const shelfResponse = yield call(axios.get, '/api/shelf')

        //gives the shelf items to the reducer that receives the 'SET_SHELF' action
        yield put ({
            type: 'SET_SHELF',
            payload: shelfResponse.data
        });
    }catch (error){
        console.log('Error in getting shelf items saga: ', error);
        
    }
}

//send post request to server to post a shelf item entered by user
function* addShelfItemSaga(action){
    try{
        yield call(axios.post, '/api/shelf', action.payload);

        //uploads DOM via action.type 'FETCH_SHELF'
        yield put({
            type: 'FETCH_SHELF'
        })
    } catch (error){
        console.log('WE AIN"T HAD NOTHING BUT MAGGOTY ERRORS FOR 3 STANKIN DAYS: ', error);
    }
}

export default shelfSaga;