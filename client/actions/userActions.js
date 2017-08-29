import axios from "axios"
export function fetchUsers(){
    return {
        type: "FETCH_USERS",
        payload:axios.get("http://rest.learncode.academy/api/wstern/users")
    }
    //promise middleware will notice that we have dispatched a command (of promise type - action/function), it will automatically
    // send through default messages for us.
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