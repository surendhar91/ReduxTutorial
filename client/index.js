import {createStore, combineReducers} from "redux";

const userReducer = (state={}, action)=>{
	switch(action.type){
		case "CHANGE_NAME":
			state.name = action.payload;
			break;
		case "CHANGE_AGE":
			state.age = action.payload;
			break;
	}
	return state;
};
const tweetsReducer = (state=[],action)=>{
	return state;
	//failing to return will cause undefined error
};
const reducers = combineReducers({
	user: userReducer,
	tweets: tweetsReducer
});
const store = createStore(reducers);
//createStore should always have reducer


//subscribe to changes of action
store.subscribe(()=>{
	 console.log("store changed", store.getState());
});

store.dispatch({type:"CHANGE_NAME", payload:"Siva"});
store.dispatch({type:"CHANGE_AGE", payload:25});

