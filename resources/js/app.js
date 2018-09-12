require('./bootstrap');

import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom';
import Main from './components/Main';
import Create from './components/Create';

render(
    <BrowserRouter>
        <div>
            <Route exact={true} path='/' component={Main}/>
            <Route path="/create" component={Create}/>
        </div>
    </BrowserRouter>,
    document.getElementById('example')
);