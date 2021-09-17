import { createStore } from "redux";
import {movieReducer} from './reducer/index';

// Creating a STORE
export const store = createStore(movieReducer);
  // console.log(store.getState());