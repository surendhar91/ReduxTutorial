export default function reducer(state={
    fetching: false,
    fetched: false,
    users: [],
    error: null
},action){
    //working on the action dispatch, create an immutable state object
    switch (action.type){
        case "FETCH_USERS_PENDING":{
            return {...state, fetching:true};
            break;
        }
        case "FETCH_USERS_REJECTED":{
            return {...state, fetching:false, error:action.payload.data};
            break;
        }
        case "FETCH_USERS_FULFILLED":{
            // console.log(action.payload.data);
            return {...state, fetching:false, fetched:true, users:action.payload.data};
            break;
        }
    }
    return state;
}