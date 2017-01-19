import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import 'font-awesome/css/font-awesome.css';
import 'flexboxgrid/css/flexboxgrid.min.css';
import App from './containers/App';
import Characters from './routes/Characters';
import Character from './routes/Character';
import './styles/main.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Characters} />
      <Route path="/characters/:id" component={Character} />
    </Route>
  </Router>,
  document.getElementById('root'),
);
