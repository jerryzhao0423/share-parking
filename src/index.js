import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { Route, Router, Switch} from 'react-router';
import 'font-awesome/css/font-awesome.css'
import 'antd/dist/antd.css';
import App from "./App";
import SpotDetail from "./components/SpotDetail/SpotDetail";
import UserProfile from "./components/UserProfile/UserProfile";
import HostSetUp from "./components/HostSetUp/HostSetUp";
import Homepage from "./components/Homepage/Homepage";
import SpotListPage from "./components/SpotList/SpotListPage";

const history = createHistory();
const router=routerMiddleware(history);

const enhancer=applyMiddleware(thunk, router);
const store=createStore(enhancer);


ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Route path="/" component={App}/>
                <Switch>
                    <Route exact path='/' component={Homepage}/>
                    <Route path='/list/' component={SpotListPage}/>
                    <Route path='/self/' component={UserProfile}/>
                    <Route path='/detail/' component={SpotDetail}/>
                    <Route path='/become-host/' component={HostSetUp}/>
                </Switch>
            </div>
        </Router>
    </Provider>
    ,document.getElementById('root')
)