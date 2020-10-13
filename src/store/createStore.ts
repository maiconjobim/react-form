import { applyMiddleware, createStore, Middleware, Reducer } from "redux";
import { ContactFormAction, ContactFormState } from "./modules/ContatcForm/types";

export interface StoreState {
  form : ContactFormState,
}
export type StoreActions = ContactFormAction;

export default (reducers:Reducer<StoreState,StoreActions>, middlewares:Middleware[]) => {
  const enhancer = applyMiddleware(...middlewares);
  return createStore(reducers,enhancer);
}