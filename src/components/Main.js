// @TODO get rid of it. we still keep it only because we have not finished business at recipe-antd repository.
// We really don't need this component

import React, { Component } from 'react'

import { Switch, Route } from 'react-router-dom'

// <Switch>
//   {/* <Route exact path='/' component={Home}/> */}
//
//   <Route path="/recipelist" component={Recipes} />
//
//
// </Switch>

class Main extends Component {
  render () {
    console.log(this.props)

    return (
      <main />
    )
  }
}

export default Main
