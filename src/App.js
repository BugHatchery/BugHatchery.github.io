import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Topics from './pages/topic/'

import './app.css'

export default props => {

  return (
    <Switch>
      <Route exact path = '/' component={Topics} />
    </Switch>
  );
};
