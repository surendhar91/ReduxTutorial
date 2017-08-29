import React from "react"
import {connect} from "react-redux"
import {fetchUsers} from "../actions/userActions"
//creates an higher order component connect and render the layout component injecting the properties to layout.
//export default connect(state => ({todos: state.todos}))(Layout);
@connect(
    (store)=>{
        //whatever we return here, will be set as props to layout component.
        return {
            //store.reducerName.objectproperty
            user: store.user.users

        };
    }
)
//specify the data in connect decorator, that your component want to pull in.
//whenever the data you are interested in changes, the component will get re-rendered again.
export default class Layout extends React.Component{
    constructor(props){
        super(props);
        this.fetchUsers = this.fetchUsers.bind(this);
    }

    fetchUsers(){
        this.props.dispatch(fetchUsers());
    }
    componentWillMount(){
        // this.props.dispatch(fetchUsers());
    }
    render(){
       let user = this.props.user;
       if(!user.length){
           return <button onClick={this.fetchUsers}>Load Users</button>;
        }
        console.log(this.props.user);
        let userList = this.props.user.filter((user)=>
            user.hasOwnProperty("name")
        ).map((user)=><li key={user.id}>{user.name}</li>);
       return <ul>
           {userList}
       </ul>;
    }
}