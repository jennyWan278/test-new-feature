/**
 * Created by SamMFFL on 2017/9/23.
 */

import "babel-polyfill";
import 'flexible';
import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import HelloWorld from 'src/views/HelloWorld';
// import {syncHistoryWithStore} from 'react-router-redux';
// import {browserHistory, hashHistory} from 'react-router';
//
// import Root from 'src/container/Root';
// import Routes from 'src/container/Routes';
// import configureStore from 'src/redux/configureStore';
//
// const store = configureStore();
// const history = syncHistoryWithStore(hashHistory, store);

render(
    <HelloWorld />,
    document.querySelector("#root"),
);