import React from "react"
import ReactDOM from "react-dom"

import Layout from "./components/Layout"
import {Provider} from "react-redux"
import store from "./store"
const app = document.getElementById("app");

ReactDOM.render(<Provider store={store}><Layout/></Provider>, app);
//you should wrap your top level component with provider (store is required)