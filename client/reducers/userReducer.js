export default function reducer(state={
    fetching: false,
    fetched: false,
    users: [],
    error: null
},action){
    //working on the action dispatch, create an immutable state object
    switch (action.type){
        case "FETCH_USERS_START":{
            return {...state, fetching:true};
            break;
        }
        case "FETCH_USERS_ERROR":{
            return {...state, fetching:false, error:action.command};
            break;
        }
        case "RECEIVE_USERS":{
            return {...state, fetching:false, fetched:true, users:action.command};
            break;
        }
    }
    return state;
}