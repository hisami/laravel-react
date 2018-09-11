require('./bootstrap');

import React from 'react'
import {render} from 'react-dom'
import { Router, Route, browserHistory } from 'react-router';
import Main from './components/Main';

render(<Main />, document.getElementById('example'));