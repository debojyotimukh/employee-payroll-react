import React from 'react';
import { createBrowserHistory } from 'history';
import './App.css';
import { Route, Router, Switch } from 'react-router-dom';
import Employee from './components/payroll-form/payroll-form';

function App() {
  const history = createBrowserHistory();
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route path="/payroll-form">
            <Employee />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
