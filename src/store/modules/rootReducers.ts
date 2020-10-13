import {combineReducers} from 'redux';
import { StoreState } from '../createStore';

import form from './ContatcForm/reducer';

export default combineReducers<StoreState>({
    form,
})