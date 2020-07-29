import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";

import { withRouter } from "react-router-dom";

import Layout from "./containers/layout/Layout";

class App extends Component {
  render() {
    return (
      <div>
        <Layout />
      </div>
    );
  }
}

export default withRouter(App);
