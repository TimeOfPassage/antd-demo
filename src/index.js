import React from 'react';
import ReactDOM from 'react-dom';
import { Router,Route,IndexRoute,hashHistory } from 'react-router';
import App from './components/app';
import Introduce from './components/introduce';
import Form from './components/form';
import MyTable from './components/table';
import Progress from './components/progress';
import Carousel from './components/carousel';

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Introduce}/>
            <Route path="/introduce" component={Introduce}/>
            <Route path="/form" component={Form}/>
            <Route path="/table" component={MyTable}/>
            <Route path="/progress" component={Progress}/>
            <Route path="／carousel" component={Carousel}/>
        </Route>
    </Router>
), document.getElementById('root'));
