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



// @TODO later it'll have a config version
// @TODO maybe we should generate a whole <Link />? looks like this is a perfect place for doing it.

const getRecipeLink = (id) => {
  return '/recipe/'+ id;
}



class Router extends Component {

  render(){

    return (
      <BrowserRouter>
        <Switch>

          <Route path="/"       component={HomeView} exact/>
          <Route path="/search" component={SearchView} exact/>


        </Switch>
      </BrowserRouter>
    )
  }
}


// export { Router, getRecipeLink, getLink };
export { Router }
