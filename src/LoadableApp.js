import React, { Component } from "react";
import Loadable from "react-loadable";
//react-loadable is used for lazy loading React applications,
//It has a Higher Order Component(HOC) called Loadable.
//Loadable dynamically loads any module before rendering it into your application
const LoadApp = Loadable({
  loader: () => import("./App"), //this tells Loadable to import our specified component
  loading() {
    //a message to display to users while Loadable is importing our component
    return <div>Loading...</div>;
  },
  timeout: 10000 // 10 seconds, this would tell Loadable how long to try loading
  //the component before it fails. This handles issues with slow internet connections.
});
export default class LoadableApp extends Component {
  render() {
    return <LoadApp />; //assigning the component returned by Higher Order Component Loadable to LoadApp then exporting class LoadableApp which is rendering LoadApp inside
  }
}
