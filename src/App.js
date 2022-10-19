import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import routes from './routes/index';
import React from 'react';

function App() {

  return (
    <Router>
      <Switch>
        {
          routes.map(route => {
            return (<Route key={route.key} path={route.path} exact={route.exact} component={route.component} />)
          }
          )
        }
      </Switch>
    </Router >
  );
}

export default App;