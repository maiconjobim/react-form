import { ContactFormAction, ContactFormState } from "./types";


const initialState : ContactFormState = {
  loadingForm : false,
  contact : {email:'',message:'',name:''},
  error : false,
  success : false
}

export default function form(state = initialState, action :ContactFormAction) : ContactFormState {
  switch (action.type) {
    case '@contactForm/SUBMIT_REQUEST':
      return {
        ...state,
        loadingForm: true,
        contact : action.payload
      }
    case '@contactForm/SUBMIT_SUCCESS':
      return{
        ...state,
        loadingForm: false,
        error :false,
        success : true
      }
    case '@contactForm/SUBMIT_FAILURE':
      return{
        ...state,
        loadingForm:false,
        error:true,
        success : false
      }
    default:
      return state;
  }
}