
import {legacy_createStore,applyMiddleware,combineReducers} from "redux"

import { productReducer } from "./product/productReducer"

import thunk from "redux-thunk"
const rootreducer=combineReducers({
    product:productReducer
})

export const store=legacy_createStore(rootreducer, applyMiddleware(thunk) )
//console.log(store.getState(),"vel");

