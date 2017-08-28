import {createStore} from "redux";

const reducer = function(state, action){
	//working on the action dispatch, create an immutable state object
	if(action.type=='INC'){
		return state+action.payload;//state is an integer
	}
	if(action.type=='DEC'){
		return state-action.payload;
	}
	return state;
}

const store = createStore(reducer,0);//createStore should always have reducer and the initial state of application


//subscribe to changes of action
store.subscribe(()=>{
	console.log(store);
	console.log("store changed", store.getState());
})

store.dispatch({type:"INC", payload:1});
store.dispatch({type:"INC", payload:2});
store.dispatch({type:"INC", payload:3});
store.dispatch({type:"DEC", payload:100});
store.dispatch({type:"INC", payload:400});