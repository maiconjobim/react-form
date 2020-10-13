import {ActionType} from 'typesafe-actions';
import * as actions from './actions';

export type ContactFormAction = ActionType<typeof actions>;

export interface ContactFormState {
   readonly loadingForm : boolean
   readonly contact : Contact
   readonly error : boolean
   readonly success : boolean
}

export interface Contact {
   name : string,
   email : string,
   message : string,
}


