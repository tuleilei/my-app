import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/css/main.css'
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
// 路由组件
import 'weui';
import Home from './pages/Home/Home';
import Recipe from './nav/Recipe/Recipe';
import Ingredient from './nav/Ingredient/Ingredient';
import Article from './nav/Article/Article';
import Pai from './nav/Pai/Pai';
import Mofang from './nav/Mofang/Mofang';
import AnSearch from './pages/AnSearch/AnSearch';
import Reg from './pages/Reg/Reg';
import Login from './pages/Login/Login';
import Jiachangcai from './nav/Recipe/Jiachangcai/Jiachangcai';
import { Provider } from 'react-redux';
import store from './stores/store';
ReactDOM.render(<Provider store={store}>
    <Router>
        <Switch>
            <Route exact path="/jiachangcai" component={Jiachangcai} />
        </Switch>
        <Switch>
            <Route exact path="/recipe" component={Recipe} />
            <Route exact path="/ingredient" component={Ingredient} />
            <Route exact path="/article" component={Article} />
            <Route exact path="/pai" component={Pai} />
            <Route exact path="/mofang" component={Mofang} />
        </Switch>
        <Switch>
            <Route exact path="/ansearch" component={AnSearch} />
            <Route exact path="/reg" component={Reg} />
            <Route exact path="/login" component={Login} />
        </Switch>
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
        <Redirect to="/" />
    </Router >
</Provider>, document.getElementById('root'));