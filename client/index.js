import {createStore} from "redux";

const reducer = function(){
	//working on the action dispatch, create an immutable state object
	return "foo";
}

const store = createStore(reducer,0);//createStore should always have reducer and the initial state of application


//subscribe to changes of action
store.subscribe(()=>{
	console.log("store changed", store.getState());
})

store.dispatch({type:"INC", payload:1});