import {createStore, combineReducers} from "redux";

const userReducer = (state=null, action)=>{
	return state;
};
const tweetsReducer = (state=null,action)=>{
	return state;
	//failing to return will cause undefined error
};
const reducers = combineReducers({
	user: userReducer,//this reducer can able to work with only the user object
	tweets: tweetsReducer
});
const store = createStore(reducers,
	{
		user:{
			name:"Suren",
			age: 25
		},
		tweets:[]
	}
);//createStore should always have reducer and the initial state of application


//subscribe to changes of action
store.subscribe(()=>{
	 console.log("store changed", store.getState());
});

store.dispatch({type:"INC", payload:1});

