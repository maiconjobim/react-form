import { ActionType } from "typesafe-actions";
import { takeLatest, put, all, call } from 'redux-saga/effects'
import * as actions from './actions';

function sleep(ms:number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function* contact({payload}: ActionType<typeof actions.contactRequest>) {
  try {
    if(payload.name && payload.email){
      yield call(sleep,1000)
      yield put(actions.contactSuccess());
    }else{
      yield put(actions.contactFailure());
    }
  } catch (error) {
    yield put(actions.contactFailure());
  }

}

export default all([
  takeLatest('@contactForm/SUBMIT_REQUEST', contact)
])