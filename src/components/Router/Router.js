import React, {
  Component,
  Fragment
} from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import HomeView    from '~/HomeView/HomeView'


import SearchView from '~/SearchView/SearchView'



class Router extends Component {

  render(){

    return (
      <BrowserRouter>
        <Switch>

          <Route path="/"  component={HomeView} exact/>
          <Route path="/search"  component={SearchView} exact/>


        </Switch>
      </BrowserRouter>
    )
  }
}


export { Router }
