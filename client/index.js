import {createStore,applyMiddleware} from "redux";

const reducer = function(initialState=0, action){
    //working on the action dispatch, create an immutable state object
    if(action.type=='INC'){
        return initialState+action.payload;//state is an integer
    }
    if(action.type=='DEC'){
        return initialState-action.payload;
    }
    console.log("initial state is",initialState);
    return initialState;
}
const logger = (store)=>(next)=>(action)=>{
	//middleware - Handler to the action, before calling the reducer. we can intercept the action and change it / cancel it.
	console.log("action fired", action);
	// action.type = "DEC";
	next(action);//triggers the next middleware, if we are not including this, we are simply terminating the redux dispatch action.

}

const store = createStore(reducer,1, applyMiddleware(logger));//createStore should always have reducer and the initial state of application


//subscribe to changes of action
store.subscribe(()=>{
	 console.log("store changed", store.getState());
});

store.dispatch({type:"INC", payload:1});
store.dispatch({type:"INC", payload:2});
store.dispatch({type:"INC", payload:3});
store.dispatch({type:"DEC", payload:100});
store.dispatch({type:"INC", payload:400});