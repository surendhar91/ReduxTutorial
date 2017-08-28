import {createStore,applyMiddleware} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import axios from "axios";
const reducer = (state={},action)=>{
    //working on the action dispatch, create an immutable state object
    switch (action.type){
        case "FETCH_USERS_START":{
            break;
        }
        case "FETCH_USERS_ERROR":{
            break;
        }
        case "RECEIVE_USERS":{
            break;
        }
    }
    return state;
}
const middleware = applyMiddleware(thunk, logger);//adding a logger
const store = createStore(reducer,middleware);//createStore should always have reducer and the initial state of application


//subscribe to changes of action
store.subscribe(()=>{
    console.log("store changed", store.getState());
});
//actions must be plain objects, if we would require an async call, then use a custom middleware: eg., thunk
store.dispatch((dispatch)=>{
  dispatch({type:"FETCH_USERS_START"});
  //Make an asynchronous call
    axios.get("http://rest.learncode.academy/api/wstern/users").then(
        (response)=>{
            dispatch({type:"RECEIVE_USERS", command: response.data});
        }
    ).catch((err)=>{
        dispatch({type:"FETCH_USERS_ERROR", command:err});
    })
});