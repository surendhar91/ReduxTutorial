export function fetchUsers(){
    return (dispatch)=>{
        dispatch({type:"FETCH_USERS_START"});
        //Make an asynchronous call
        axios.get("http://rest.learncode.academy/api/wstern/users").then(
            (response)=>{
                dispatch({type:"RECEIVE_USERS", command: response.data});
            }
        ).catch((err)=>{
            dispatch({type:"FETCH_USERS_ERROR", command:err});
        })
    }
}
export function setUserName(name){
    return {
        type: "SET_USER_NAME",
        command: name
    }
}

export function setUserAgent(age){
    return {
        type: "SET_USER_AGE",
        command: age
    }
}