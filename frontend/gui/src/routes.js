import React from 'react';
import { Route } from 'react-router-dom';

import ArticleList from './containers/ArticleListView';
import ArticleDetailView from './containers/ArticleDetailView';
import Login from './containers/Login;'


const BaseRouter = () => (
    <div>
        <Route exact path='/' component={ArticleList}/>
        <Route exact path='/:articleId' component={ArticleDetailView}/>
        <Route exact path='/:login/' component={Login}/>
    </div>
);

export default BaseRouter