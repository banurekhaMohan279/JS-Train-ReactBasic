import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import App from './App';
import Counter from './Counter';

export default function Routes(){
  return(
    <BrowserRouter>
      <Route exact path = '/'> <App/> </Route>
      <Route path = '/'> <Counter/> </Route>
    </BrowserRouter>
  )
}
