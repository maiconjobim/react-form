import { action } from "typesafe-actions"
import { Contact } from "./types"



export function contactRequest({name , email , message} : Contact){
  return action('@contactForm/SUBMIT_REQUEST',{name,email,message});
}

export function contactSuccess(){
  return action('@contactForm/SUBMIT_SUCCESS');
}

export function contactFailure(){
  return action('@contactForm/SUBMIT_FAILURE');
}
