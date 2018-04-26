import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* shelfSaga(){
    yield takeEvery('FETCH_SHELF', getShelfItemSaga);
    yield takeEvery('ADD_SHELF_ITEM', addShelfItemSaga);
    yield takeEvery('DELETE_SHELF_ITEM', deleteShelfItemSaga);
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

//sends post request to server to post a shelf item entered by user
function* addShelfItemSaga(action){
    try{
        yield call(axios.post, '/api/shelf', action.payload);

        //uploads DOM with newly posted item via action.type 'FETCH_SHELF'
        yield put({
            type: 'FETCH_SHELF'
        })
    } catch (error){
        console.log('WE AIN"T HAD NOTHING BUT MAGGOTY ERRORS FOR 3 STANKIN DAYS: ', error);
    }
}

//sends delete request with id of item to be deleted along with the user in the body in order to 
//authenticate the user and in order for the user to be able to delete only items that he or she has posted
function* deleteShelfItemSaga(action){
    try{   
        yield call(axios.delete, `/api/shelf/${action.payload.item.id}`, action.payload.user);

        //uploads DOM with the requested item deleted via action.type 'FETCH_SHELF'
        yield put({
            type: 'FETCH_SHELF'
        })
    }catch (error){
        console.log('ERROR IN DELETE SAGA: ', error)
    }
}

export default shelfSaga;