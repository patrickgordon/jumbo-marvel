import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import 'font-awesome/css/font-awesome.css';
import 'flexboxgrid/css/flexboxgrid.min.css';
import configureStore from './redux/store/configureStore';
import App from './layout/App';
import Characters from './routes/Characters';
import Character from './routes/Character';
import './styles/main.css';
import { getCharacters } from './redux/modules/characters';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

store.dispatch(getCharacters());

// To address a glaring issue with react-router...
// see issue https://github.com/ReactTraining/react-router/issues/2019

function handleUpdate() {
  const { action } = this.state.location;

  if (action === 'PUSH') {
    window.scrollTo(0, 0);
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} onUpdate={handleUpdate}>
      <Route path="/" component={App}>
        <IndexRoute component={Characters} />
        <Route path="/characters/:id" component={Character} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
